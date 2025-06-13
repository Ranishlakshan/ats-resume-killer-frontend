import React from "react";
import "./Footer.css";
import "../../../public/images/progress-logo-ash.png"

const Footer = () => {
  return (
    <footer className="progress-footer">
      <div className="pf-main">
        {/* Left Section: Digital Business Transformation */}
        <div className="pf-section pf-transformation">
          <h3>BrewMyJob: Your AI Career Barista</h3>
          <p className="pf-desc">
            Brew a smarter job search.
From analysis to action, BrewMyJob brings you the insights and documents you need—so you can focus on landing interviews, not paperwork.
          </p>
          <div className="pf-features-row">
            <div className="pf-feature-group">
              <div>
                <span className="pf-feature-title">Intelligent Resume & Job Match Analysis</span>
                <p>Scan your resume and any job description to instantly receive a comprehensive report on your fit, including keyword gaps, skills alignment, and improvement suggestions.</p>
              </div>
              <div>
                <span className="pf-feature-title">Keyword & Skill Gap Highlighting</span>
                <p>Get a clear view of missing keywords, soft skills, and hard skills—so you can optimize your resume for every opportunity.</p>
              </div>
              <div>
                <span className="pf-feature-title">Personalized Fit Scoring & Insights</span>
                <p>Receive an overall match score and actionable feedback based on advanced comparison of your resume to any job description.</p>
              </div>
            </div>
            <div className="pf-feature-group">
              <div>
                <span className="pf-feature-title">Instant Cover Letter Generation</span>
                <p>Let BrewMyJob instantly generate a tailored cover letter from your resume and the job description—ready to copy, send, and impress.</p>
              </div>
              <div>
                <span className="pf-feature-title">Application Readiness Report</span>
                <p>Get a checklist and summary report ensuring your application is complete, relevant, and optimized for the specific role</p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle: Quick Links */}
        <div className="pf-section pf-links">
          <div className="pf-links-col">
            <div className="pf-links-title">QUICK LINKS</div>
            <ul>
              <li><a href="#">Products</a></li>
              <li><a href="#">Trials</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Training</a></li>
              <li><a href="#">Consulting</a></li>
              <li><a href="#">Blogs</a></li>
            </ul>
          </div>
        </div>

        {/* About Section */}
        <div className="pf-section pf-about">
          <div className="pf-about-title">ABOUT</div>
          <ul>
            <li><a href="/about">Company</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/suggestions">Feedback</a></li>
            <li><a href="/questions">FAQ</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="pf-section pf-contact">
          <button className="pf-contact-btn">CONTACT US</button>
          <div className="pf-phone">support@brewmyjob.com</div>
        </div>
      </div>

      {/* Lower Bar */}
      <div className="pf-lower">
        <div className="pf-lower-left">
          <img src="/images/progress-logo-ash.png" alt="Progress Logo" className="pf-logo" />
          <div className="pf-policies">
            <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a> | <a href="#">Trademarks</a> | <a href="#">License Agreements</a>
          </div>
          <div className="pf-copyright">
            Copyright © 2025, BrewMyJob Inc. and/or its affiliates. All rights reserved.
          </div>
        </div>
        
        <div className="pf-lower-social">
          <a href="#"><img src="/icons/facebook.png" alt="Facebook" width="24" height="24" /></a>
          <a href="#"><img src="/icons/twitter.png" alt="Twitter" width="24" height="24" /></a>
          <a href="#"><img src="/icons/youtube.png" alt="YouTube" width="24" height="24" /></a>
          <a href="#"><img src="/icons/linkedin.png" alt="LinkedIn" width="24" height="24" /></a>
        </div>

      </div>
      {/* <div className="pf-powered">
        Powered by <span className="pf-sitefinity">Progress Sitefinity</span>
      </div> */}
    </footer>
  );
};

export default Footer;
