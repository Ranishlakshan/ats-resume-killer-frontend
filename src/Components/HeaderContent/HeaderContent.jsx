import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import ProfileDropdown from './ProfileDropdown';
import './HeaderContent.css';
import { useNavigate } from 'react-router-dom';

// Define your menu structure in an array:
const menu = [
  {
    name: "Resume & Cover Letter Tools",
    sublinks: [
      { label: "Resume Scan & Keyword Match", url: "/" },
      { label: "Cover Letter Generator", url: "/cover-letter" },
      { label: "Resume Templates", url: "/resume-templates" },
      { label: "Cover Letter Templates", url: "/cover-letter-templates" },
      { label: "Advanced Resume Builder", url: "/advanced-resume-builder" },
      { label: "LinkedIn Optimization", url: "/linkedin-optimization" },
    ],
  },
  {
    name: "Job Search & Application",
    sublinks: [
      { label: "Job Search", url: "/job-search" },
      { label: "Referral Program", url: "/referral-program" },
      { label: "Application Tracking (future)", url: "/application-tracking" },
      { label: "Job Alerts (future)", url: "/job-alerts" },
    ],
  },
  {
    name: "Recruiter Solutions",
    sublinks: [
      { label: "Bulk Resume Analysis", url: "/bulk-resume-analysis" },
      { label: "Best Fit Resume Shortlisting", url: "/resume-shortlisting" },
      { label: "Recruiter Dashboard (future)", url: "/recruiter-dashboard" },
      { label: "Automated Candidate Ranking", url: "/candidate-ranking" },
    ],
  },
  {
    name: "Pricing & Plans",
    sublinks: [
      { label: "Subscription Tiers", url: "/pricing" },
      { label: "Free vs Premium Features", url: "/pricing#comparison" },
      { label: "Upgrade/Manage Subscription", url: "/manage-subscription" },
    ],
  },
  {
    name: "Resources & Guides",
    sublinks: [
      { label: "How-to Guides", url: "/how-to-guide" },
      { label: "ATS Insights", url: "/ats-insight" },
      { label: "Resume & Cover Letter Tips", url: "/resume-tips" },
      { label: "Ebooks & Learning Materials", url: "/ebooks" },
      { label: "FAQ", url: "/questions" },
    ],
  },
  {
    name: "About & Support",
    sublinks: [
      { label: "About Us", url: "/about" },
      { label: "Contact Support", url: "/contact" },
      { label: "Feedback & Suggestions", url: "/suggestions" },
      { label: "Privacy Policy / Terms", url: "/privacy-policy" },
    ],
  },
];

function HeaderContent() {
  const [user, setUser] = useState(null);
  const [subscription, setSubscription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        try {
          const userDoc = await getDoc(doc(db, "users", currentUser.uid));
          if (userDoc.exists()) {
            setSubscription(userDoc.data().subscription || "free");
          } else {
            setSubscription("free");
          }
        } catch {
          setSubscription("free");
        }
      } else {
        setSubscription("");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    navigate("/");
  };

  const handleSignIn = () => {
    navigate("/login");
  };

  return (
    <header className="header-container">
      <div className="header-logo">
        <img
          src="/images/progress-logo-black.png"
          alt="BrewMyJob Logo"
          className="header-logo-img"
        />
      </div>
      <nav className="navbar">
        {/* {menu.map((main, idx) => (
          <div className="dropdown" key={idx}>
            <span className="menu-link-text main-menu">{main.name}</span>
            <div className="dropdown-content">
              {main.sublinks.map((sublink, subidx) => (
                <a
                  className="dropdown-link"
                  href={sublink.url}
                  key={subidx}
                >
                  {sublink.label}
                </a>
              ))}
            </div>
          </div>
        ))} */}

        {menu.map((main, idx) => {
          // Make Recruiter Solutions non-clickable
          const isDisabled = main.name === "Recruiter Solutions";
          return (
            <div className={`dropdown${isDisabled ? " disabled-dropdown" : ""}`} key={idx}>
              <span
                className={`menu-link-text main-menu${isDisabled ? " disabled-tab" : ""}`}
                // Optional: add a tooltip
                title={isDisabled ? "Coming soon!" : undefined}
                style={{
                  cursor: isDisabled ? "not-allowed" : "pointer",
                  color: isDisabled ? "#bbb" : undefined, // gray out
                  opacity: isDisabled ? 0.7 : 1,
                  pointerEvents: isDisabled ? "none" : undefined,
                }}
              >
                {main.name}
              </span>
              {/* Only show dropdown for enabled tabs */}
              {!isDisabled && (
                <div className="dropdown-content">
                  {main.sublinks.map((sublink, subidx) => (
                    <a
                      className="dropdown-link"
                      href={sublink.url}
                      key={subidx}
                    >
                      {sublink.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {/* end of recruiter features */}
        
      </nav>
      <div className="header-actions">
        {user ? (
          <>
            {subscription && (
              <span className={`subscription-badge ${subscription}`}>
                {subscription === "premium" ? "Premium" : "Free Version"}
              </span>
            )}
            <ProfileDropdown user={user} handleLogout={handleLogout} />
          </>
        ) : (
          <button className="hero-btn" onClick={handleSignIn}>
            Sign In
          </button>
        )}
      </div>
    </header>
  );
}

export default HeaderContent;
