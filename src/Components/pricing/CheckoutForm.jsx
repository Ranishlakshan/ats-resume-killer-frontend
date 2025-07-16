import React, { useState } from "react";
import axios from "axios";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import { auth, firestore } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import "./CheckoutForm.css";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: "16px",
      color: "#2e354f",
      fontFamily: "inherit",
      letterSpacing: "0.5px",
      "::placeholder": {
        color: "#aab7c4",
      },
      backgroundColor: "#fafafa",
      padding: "12px 0",
    },
    invalid: {
      color: "#e5424d",
    },
  },
  hidePostalCode: true,
};

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const createPaymentIntent = async () => {
    try {
      const response = await axios.post(
        "https://api.brewmyjob.com/api/payment/create-payment-intent",
        {
          amount: 2499,
          currency: "usd",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data.clientSecret;
    } catch (err) {
      throw new Error("Failed to create payment intent");
    }
  };

  const updateUserSubscription = async (user) => {
    const userRef = doc(firestore, "users", user.uid);
    console.log("Updating Firestore for user:", user.email, "UID:", user.uid);
    await setDoc(
      userRef,
      {
        email: user.email,
        subscription: "premium",
        updatedAt: new Date().toISOString(),
      },
      { merge: true }
    );
    console.log("Firestore updated successfully.");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setProcessing(true);

    if (!stripe || !elements) {
      setError("Stripe has not loaded yet.");
      setProcessing(false);
      return;
    }

    try {
      console.log("Requesting payment intent from backend...");
      const clientSecret = await createPaymentIntent();
      console.log("Received clientSecret:", clientSecret);

      const cardElement = elements.getElement(CardElement);

      const { paymentIntent, error: stripeError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: { name: 'Customer Name' }, // ✅ ADDED
        },
      });

      if (stripeError) {
        setError(stripeError.message);
        setProcessing(false);
        return;
      }

      if (paymentIntent && paymentIntent.status === "succeeded") {
        const user = auth.currentUser;
        console.log("Checking if user is signed in...");
        if (user) {
          console.log("User is signed in:", user.email, "UID:", user.uid);
          try {
            await updateUserSubscription(user);
          } catch (firestoreErr) {
            console.error("Payment succeeded, but failed to update subscription:", firestoreErr);
            setError("Payment succeeded, but failed to update subscription: " +
              (firestoreErr.message || firestoreErr));
            setProcessing(false);
            return;
          }
        } else {
          console.error("Payment succeeded, but no user is logged in.");
          setError("Payment succeeded, but no user is logged in.");
          setProcessing(false);
          return;
        }
        alert("Payment successful! Thank you for subscribing.");
        setProcessing(false);
        navigate("/");
      } else {
        setError("Payment was not successful.");
        setProcessing(false);
      }
    } catch (err) {
      console.error("General error during payment:", err);
      setError(err.message || "An error occurred during payment.");
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <label style={{ marginBottom: 10, fontWeight: "bold" }}>
        Credit or Debit Card
        <div className="stripe-input">
          <CardElement options={CARD_ELEMENT_OPTIONS} />
        </div>
      </label>
      {error && <div className="error" style={{ color: "#e5424d" }}>{error}</div>}
      <button type="submit" disabled={!stripe || processing}>
        {processing ? "Processing…" : "Pay $24.99"}
      </button>
    </form>
  );
};

export default CheckoutForm;
