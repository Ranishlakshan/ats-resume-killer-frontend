import React from 'react'
import './WelcomeCustomer.css'
import UserInput from '../UserInput/UserInput'
import UserWelcomeNote from '../../UserWelcomeNote/UserWelcomeNote'
import CustomerReview from '../../CustomerReview/CustomerReview';


function WelcomeCustomer() {

  const handleGetStarted = () => {
    const el = document.getElementById("resume-scan-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <>
      <div className="main-wrapper">
        {/* Cover image at top */}
      <div className="cover-image-wrapper">
        <img
          src="/cover-image.png"
          alt="Resume Optimization"
          className="cover-image"
        />
        <div className="cover-overlay">
          <h1 className="cover-title">
            Land more interviews with a smarter resume.
          </h1>
          <div className="cover-tagline">
            ATS Killer optimizes your resume for every job, <br /> spotlighting your most valuable skills 
            so you <br /> never get overlooked.
          </div>
          <button className="cover-btn" onClick={handleGetStarted} >Get Started</button>
        </div>
      </div>
      <div className="feature-image-wrapper">
        <img
          src="/feature-image.png" // Place your new image in the public folder with this name
          alt="Resume Match Rate"
          className="feature-image"
        />
        <div className="feature-overlay">
          <h2 className="feature-title">
            Show that you&apos;re the perfect match
          </h2>
          <div className="feature-tagline">
            ATS killer’s proprietary AI analyzes your resume and compares it to the job listing using AI technology. Use your match rate report to see how to optimize your resume to get more interviews.
          </div>
        </div>
      </div>

      <div className="resume-container">
        <UserInput />

        <div className="robot-image-wrapper">
          <img
            src="/robot-image.png"
            alt="ATS Robot"
            className="robot-image"
          />
          <div className="robot-overlay">
            <h2 className="robot-title">
              Beat the bots, land more interviews!
            </h2>
            <div className="robot-tagline">
              Most companies use Applicant Tracking Systems (ATS) that may filter out qualified candidates.
              Our AI helps you pass the robot and get noticed by recruiters.
            </div>
            <button className="robot-btn" onClick={handleGetStarted}>Learn More</button>
          </div>
        </div>

        <CustomerReview />

        <UserWelcomeNote />
        
      </div>
      </div>
    </>
  )
}

export default WelcomeCustomer
