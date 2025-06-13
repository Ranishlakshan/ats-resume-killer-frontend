import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./PaymentPage.css";

// Your Stripe publishable key (test mode)
const stripePromise = loadStripe("pk_test_51RNGraRo5k642NFNqgOertn3b9MrfHvk3s1Pu6mrETjthoJI3CrFdyTJjZCBJYKBFs4zHGxVENgEOWYwSihmsSdB0074WmnXQY");

const PaymentPage = () => (
  <div className="payment-container">
    <div className="payment-card">
      <h2>Upgrade to Premium</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  </div>
);


export default PaymentPage;
