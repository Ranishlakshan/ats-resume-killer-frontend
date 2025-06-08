import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase'; // Adjust path as needed
import MenuLink from '../MenuLink/MenuLink';
import ProfileDropdown from './ProfileDropdown'; // <-- Import your dropdown
import './HeaderContent.css';
import { useNavigate } from 'react-router-dom';

function HeaderContent() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // currentUser is null if not signed in
      console.log("Firebase Auth user:", currentUser); // Logs user info
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
          <ProfileDropdown user={user} handleLogout={handleLogout} />
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
