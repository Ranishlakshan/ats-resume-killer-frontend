import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { auth, provider, db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import ProfileDropdown from './ProfileDropdown';
import './HeaderContent.css';
import { useNavigate } from 'react-router-dom';

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
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

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

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);
      if (!userDocSnap.exists()) {
        await setDoc(userDocRef, {
          email: user.email,
          subscription: "free",
          updatedAt: new Date().toISOString(),
          resumeScan: 3,
          coverLetterScan: 3,
        });
      }
    } catch (error) {
      alert("Google Sign-In error: " + error.message);
    }
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
      <button className="mobile-menu-toggle" onClick={toggleMenu}>☰</button>
      <nav className="navbar desktop-navbar">
        {menu.map((main, idx) => {
          const isDisabled = main.name === "Recruiter Solutions";
          return (
            <div className={`dropdown${isDisabled ? " disabled-dropdown" : ""}`} key={idx}>
              <span
                className={`menu-link-text main-menu${isDisabled ? " disabled-tab" : ""}`}
                title={isDisabled ? "Coming soon!" : undefined}
                style={{
                  cursor: isDisabled ? "not-allowed" : "pointer",
                  color: isDisabled ? "#bbb" : undefined,
                  opacity: isDisabled ? 0.7 : 1,
                  pointerEvents: isDisabled ? "none" : undefined,
                }}
              >
                {main.name}
              </span>
              {!isDisabled && (
                <div className="dropdown-content">
                  {main.sublinks.map((sublink, subidx) => (
                    <a className="dropdown-link" href={sublink.url} key={subidx}>
                      {sublink.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
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

      <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
        <nav className="mobile-menu-inner">
          {menu.map((main, idx) => {
            const isDisabled = main.name === "Recruiter Solutions";
            return (
              <div className={`dropdown${isDisabled ? " disabled-dropdown" : ""}`} key={idx}>
                <span
                  className={`menu-link-text main-menu${isDisabled ? " disabled-tab" : ""}`}
                  title={isDisabled ? "Coming soon!" : undefined}
                  style={{
                    cursor: isDisabled ? "not-allowed" : "pointer",
                    color: isDisabled ? "#bbb" : undefined,
                    opacity: isDisabled ? 0.7 : 1,
                    pointerEvents: isDisabled ? "none" : undefined,
                  }}
                >
                  {main.name}
                </span>
                {!isDisabled && (
                  <div className="dropdown-content">
                    {main.sublinks.map((sublink, subidx) => (
                      <a className="dropdown-link" href={sublink.url} key={subidx}>
                        {sublink.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
      {menuOpen && <div className="menu-backdrop" onClick={toggleMenu}></div>}
    </header>
  );
}

export default HeaderContent;