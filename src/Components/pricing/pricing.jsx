import React, { useEffect, useState } from "react";
import "./pricing.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import HeaderContent from "../HeaderContent/HeaderContent";
import Footer from "../Footer/Footer";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

const Pricing = () => {
  const navigate = useNavigate();
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    const checkSub = async () => {
      if (auth.currentUser) {
        const userDoc = await getDoc(doc(db, "users", auth.currentUser.uid));
        if (userDoc.exists()) {
          setSubscription(userDoc.data().subscription || "free");
        }
      }
    };

    const unsub = auth.onAuthStateChanged((user) => {
      if (user) checkSub();
      else setSubscription(null);
    });

    return () => unsub();
  }, []);

  return (
    <div>
      <HeaderContent />
      <div className="pricing-page-flex">
        <Sidebar />
        <main className="pricing-container">
          <div className="pricing-hero">
            <div className="pricing-hero-label">Pricing</div>
            <h1 className="pricing-hero-title">
              Plans that support<br />your growth
            </h1>
            <p className="pricing-hero-desc">
              Our pricing plans provide the necessary features and resources to support your job search’s continued growth and success.
            </p>
          </div>

          <div className="plans">
            {/* Free Plan */}
            <div className="plan free">
              <h3>Free</h3>
              <p className="price">$0<span>/month</span></p>
              {subscription === "free" ? (
                <button className="current-plan">Current Plan</button>
              ) : (
                <button className="subscribe" onClick={() => navigate("/")}>Switch</button>
              )}
              <p className="note">Free Forever</p>
            </div>

            {/* Premium Plan */}
            <div className="plan premium-monthly">
              <h3>Premium Monthly</h3>
              <p className="price">$24.99<span>/month</span></p>
              {subscription === "premium" ? (
                <button className="current-plan">Current Plan</button>
              ) : (
                <button className="subscribe" onClick={() => navigate("/payment")}>Subscribe</button>
              )}
              <p className="billing">$24.99 Billed Every Month</p>
            </div>
          </div>

          <div className="features-table">
            {/* Future features */}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
