import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, db } from '../../firebase'; // db added
import { doc, getDoc } from 'firebase/firestore'; // Firestore imports
import MenuLink from '../MenuLink/MenuLink';
import ProfileDropdown from './ProfileDropdown';
import './HeaderContent.css';
import { useNavigate } from 'react-router-dom';

function HeaderContent() {
  const [user, setUser] = useState(null);
  const [subscription, setSubscription] = useState(""); // For subscription info
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // Fetch subscription from Firestore
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
        <MenuLink linkname="Cover Letters" url="/cover-letter" />
        <MenuLink linkname="Pricing & Plans" url="/" />
        <MenuLink linkname="Home" url="/" />
        <MenuLink linkname="Blog" url="/blog" />
        <MenuLink linkname="About Us" url="/about" />
        <MenuLink linkname="Contact Us" url="/contact" />
      </nav>
      <div className="header-actions">
        {user ? (
          <>
            {/* Show badge left to user icon */}
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
