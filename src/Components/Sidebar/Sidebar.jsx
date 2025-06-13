import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div className="logo">
        
      </div>
      <ul className="nav-list">
        <li onClick={() => navigate("/")}>New Scan</li>
        <li onClick={() => navigate("/user-output")}>Scan Result</li>
        <li onClick={() => navigate("/cover-letter")}>Cover Letters</li>
        <li onClick={() => navigate("/resumes")}>Resumes</li>
        <li onClick={() => navigate("/pricing")}>Pricing & Plans</li>
      </ul>
    </div>
  );
};

export default Sidebar;
