import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const [isOpen, setIsOpen] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 900);
    if (window.innerWidth > 900) setIsOpen(true);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {isMobile && (
        <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
          ☰
        </button>
      )}

      <div className={`sidebar ${isMobile ? (isOpen ? "open" : "closed") : ""}`}>
        <div className="logo">
          {/* Add logo here if needed */}
        </div>
        <ul className="nav-list">
          <li onClick={() => navigate("/")}>New Scan</li>
          <li onClick={() => navigate("/user-output")}>Scan Result</li>
          <li onClick={() => navigate("/cover-letter")}>Cover Letters</li>
          <li onClick={() => navigate("/resumes")}>Resumes</li>
          <li onClick={() => navigate("/pricing")}>Pricing & Plans</li>
        </ul>
      </div>

      {isMobile && isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Sidebar;