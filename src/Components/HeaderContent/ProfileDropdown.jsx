import React, { useState, useRef, useEffect } from 'react';
import './ProfileDropdown.css';

function ProfileDropdown({ user, handleLogout }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="profile-dropdown-wrapper" ref={ref}>
      <img
        src={user?.photoURL || "/default-avatar.png"}
        alt="Profile"
        className="profile-avatar"
        onClick={() => setOpen(o => !o)}
        style={{ cursor: "pointer" }}
      />
      {open && (
        <div className="profile-dropdown">
          <div className="profile-header">
            <img src={user?.photoURL || "/default-avatar.png"} alt="Avatar" className="profile-avatar-large" />
            <div>
              <div className="profile-name">{user?.displayName || "User"}</div>
              <div className="profile-email">{user?.email}</div>
            </div>
          </div>
          <div className="profile-links">
            <a href="/settings">Account Settings</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms</a>
          </div>
          <button className="profile-logout-btn" onClick={handleLogout}>Log out</button>
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;
