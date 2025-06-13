import React from "react";
import "./UserWelcomeNote.css";

const UserWelcomeNote = ({ onClose }) => {
  return (
    <div className="welcome-note-container">
      <div className="header">
        <div className="title">
          <span className="lock-icon">🔒</span> How Our Platform is Different 
        </div>
        <button className="close-button" onClick={onClose}>✖</button>
      </div>

      <div className="content">
  <div className="section-col">
    <div className="section">
      <h3>Perfect for every job application</h3>
      <ul>
        <li>🔒 <em>Unlimited_  </em>  resume scans</li>
        <li>🔒 Generate your Cover Letter</li>
      </ul>
    </div>

    <div className="section">
      <h3>Job-Matching Intelligence</h3>
      <ul>
        <li>🔒 Unlike simple ATS trackers, our platform analyzes your resume 
          and the actual job description together—not just keywords. We show 
          you exactly how your skills and experience align with each job you’re targeting.</li>
        
        <li>🔹 <a href="#">ATS friendly resume scans</a></li>
      </ul>
    </div>

    <div className="section">
      <h3>AI-Powered Resume & Cover Letter Generator</h3>
      <ul>
        <li>🔹 
          {/* <a href="#">Scan here</a>  */}
          Instantly generate tailored resumes and cover letters 
        customized to each job posting—saving you hours of manual work and maximizing your chances 
        with every application.</li>
        
      </ul>
    </div>
  </div>

  <div className="section-col">
    <div className="section">
      <h3>Actionable Match Reports</h3>
      <ul>
        <li>🔒 
          {/* <a href="#">Optimize your LinkedIn profile</a> */}
          Get a clear, visual breakdown of your resume’s strengths and gaps versus the job requirements.
See exactly which skills, experiences, or keywords you’re missing—no more guesswork!</li>
        
      </ul>
    </div>

    <div className="section">
      <h3>LinkedIn and e-Presence Boost</h3>
      <ul>
        <li>🔹 
          {/* <a href="#">Career Change tool</a> */}
          Use our LinkedIn optimization tools to make sure your digital presence supports your job search, 
          helping you get noticed by recruiters and hiring managers.
          </li>
      </ul>
    </div>
  </div>
</div>
    </div>
  );
};

export default UserWelcomeNote;
