import React from 'react'
import HeaderContent from '../../../Components/HeaderContent/HeaderContent'
import Footer from '../../../Components/Footer/Footer'
import './HowtoGuide.css'

function HowtoGuide() {
  return (
    <>
      <HeaderContent />
      <div className="howto-guide-container">
        <h1>How-To Guide: Getting Started with Brew My Job</h1>

        <section>
          <h2>1. Create Your Account</h2>
          <ul>
            <li>Click the <strong>Sign Up</strong> or <strong>Get Started</strong> button on the homepage.</li>
            <li>Register using your email and create a password, or sign in with your Google account for quick access.</li>
            <li>Complete your profile for a more personalized experience.</li>
          </ul>
        </section>

        <section>
          <h2>2. Scan Your Resume Against a Job Description</h2>
          <ul>
            <li>Go to the <strong>Resume Scanner</strong> section.</li>
            <li>Upload your resume (PDF or DOCX).</li>
            <li>Paste the job description from any job posting.</li>
            <li>Click <strong>Scan Now</strong>.</li>
            <li>Instantly see your match rate and which keywords or skills are missing.</li>
            <li>Review the detailed suggestions to improve your resume and get a higher match.</li>
          </ul>
        </section>

        <section>
          <h2>3. Optimize Your Resume</h2>
          <ul>
            <li>Use the match report to:
              <ul>
                <li>Add missing keywords from the job description.</li>
                <li>Highlight relevant skills and experiences.</li>
                <li>Remove outdated or irrelevant content.</li>
              </ul>
            </li>
            <li>Try our ATS-friendly resume templates to ensure your document is easy for both robots and recruiters to read.</li>
            <li>Save or download your optimized resume.</li>
          </ul>
        </section>

        <section>
          <h2>4. Generate a Custom Cover Letter</h2>
          <ul>
            <li>Navigate to the <strong>Cover Letter Generator</strong>.</li>
            <li>Select your newly optimized resume and the job description.</li>
            <li>Click <strong>Generate Cover Letter</strong>.</li>
            <li>Review your AI-generated cover letter:
              <ul>
                <li>It’s tailored to the job.</li>
                <li>It uses the right keywords and highlights your strengths.</li>
              </ul>
            </li>
            <li>Edit the cover letter if you wish, then download or copy it for your application.</li>
          </ul>
        </section>

        <section>
          <h2>5. Manage Your Documents</h2>
          <ul>
            <li>Access all your uploaded and generated files in your <strong>Dashboard</strong>.</li>
            <li>Download, edit, or delete resumes and cover letters as needed.</li>
            <li>Track your recent scans and cover letter generations.</li>
          </ul>
        </section>

        <section>
          <h2>6. Upgrade to Premium (Optional)</h2>
          <ul>
            <li>Go to <strong>Pricing & Plans</strong>.</li>
            <li>Compare Free and Premium features.</li>
            <li>Choose a plan that fits your needs for unlimited scans, advanced templates, and priority support.</li>
            <li>Complete your subscription to unlock all features.</li>
          </ul>
        </section>

        <section>
          <h2>7. Additional Tips</h2>
          <ul>
            <li>Use the <strong>LinkedIn Optimization</strong> tool to improve your LinkedIn profile and increase visibility to recruiters.</li>
            <li>Explore our <strong>Resources & Guides</strong> for resume writing tips, interview prep, and more.</li>
          </ul>
        </section>

        <section>
          <h2>8. Need Help?</h2>
          <ul>
            <li>Visit the <strong>FAQ</strong> page for answers to common questions.</li>
            <li>Contact our support team through the <strong>Contact Us</strong> page for personalized help.</li>
            <li>Share your feedback or suggestions to help us improve Brew My Job!</li>
          </ul>
        </section>

        <div className="howto-summary">
          <strong>
            With Brew My Job, you’re just a few steps away from a smarter, more effective job application!
          </strong>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default HowtoGuide
