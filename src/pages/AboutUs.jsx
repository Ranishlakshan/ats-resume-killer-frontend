import React from 'react'
import HeaderContent from '../Components/HeaderContent/HeaderContent'
import Footer from '../Components/Footer/Footer'
import './AboutUs.css'

function AboutUs() {
  return (
    <>  
      <HeaderContent/>
      <div className="about-us-container">
        <h1>About Us</h1>
        <p>
          <strong>Brew My Job</strong> is your smart companion in the job search journey—helping you craft ATS-optimized resumes, generate tailored cover letters, and connect with meaningful opportunities. We blend innovative technology with an intuitive experience, making job hunting simpler and more successful for everyone.
        </p>
        
        <section className="about-section">
          <h2>Our Vision</h2>
          <p>
            <em>
              To empower every job seeker to unlock their full potential and land their dream role—one freshly brewed application at a time.
            </em>
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            We strive to remove barriers in job applications by providing cutting-edge tools, practical guidance, and a supportive community—making your career journey smarter, faster, and more rewarding.
          </p>
        </section>

        <section className="about-section">
          <h2>What We Offer</h2>
          <ul>
            <li>✅ Instant resume scanning & keyword matching</li>
            <li>✅ One-click cover letter generation</li>
            <li>✅ Beautiful, modern resume & cover letter templates</li>
            <li>✅ LinkedIn profile optimization</li>
            <li>✅ Recruiter tools & bulk analysis (for companies)</li>
            <li>✅ Clear pricing, free & premium plans</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Why Choose Brew My Job?</h2>
          <ul>
            <li>🚀 Built for job seekers, by career experts and techies</li>
            <li>🌟 ATS-friendly and recruiter-approved</li>
            <li>⚡ Simple, fast, and secure</li>
            <li>☕ Friendly support—always brewing new features!</li>
          </ul>
        </section>
      </div>
      <Footer/>
    </>
  )
}

export default AboutUs
