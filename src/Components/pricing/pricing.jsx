import React from "react";
import "./pricing.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import HeaderContent from "../HeaderContent/HeaderContent";
import Footer from "../Footer/Footer";

const Pricing = () => {
  const navigate = useNavigate();

  return (
    <div>
      <HeaderContent />
      {/* Flex layout: sidebar + main */}
      <div className="pricing-page-flex">
        <Sidebar />
        <main className="pricing-container">
          <div className="pricing-hero">
            <div className="pricing-hero-label">Pricing</div>
            <h1 className="pricing-hero-title">Plans that support<br />your growth</h1>
            <p className="pricing-hero-desc">
              Our pricing plans provide the necessary features and resources to support your job search’s continued growth and success.
            </p>
          </div>
          <div className="plans">
            {/* ...your plans here... */}
            <div className="plan free">
              <h3>Free</h3>
              <p className="price">$0<span>/month</span></p>
              <button className="current-plan">Current Plan</button>
              <p className="note">Free Forever</p>
            </div>
            <div className="plan premium-monthly">
              <h3>Premium Monthly</h3>
              <p className="price">$24.99<span>/month</span></p>
              <button className="subscribe" onClick={() => navigate("/payment")}>Subscribe</button>
              <p className="billing">$24.99 Billed Every Month</p>
            </div>
          </div>
          <div className="features-table">
            {/* ...your features table here... */}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
