import React from 'react'
import HeaderContent from '../../../Components/HeaderContent/HeaderContent'
import Footer from '../../../Components/Footer/Footer'
import './AtsInsight.css'

function AtsInsight() {
  return (
    <>
      <HeaderContent />
      <div className="ats-insight-container">
        <h1>How Does ATS Work? Why Is Resume Matching Important?</h1>

        <section>
          <h2>What is an ATS?</h2>
          <p>
            An Applicant Tracking System (ATS) is software used by employers and recruiters to manage job applications.
            Before a human ever sees your resume, the ATS scans and analyzes it, ranking or filtering candidates based on how well their documents match the job description.
          </p>
        </section>

        <section>
          <h2>How Does ATS Match Resumes with Job Descriptions?</h2>
          <ul>
            <li>
              <strong>Keyword Extraction:</strong>  
              The ATS scans your resume and the job description for important keywords (skills, qualifications, job titles, tools, certifications, etc.).
            </li>
            <li>
              <strong>Section Parsing:</strong>  
              It checks if your resume contains standard sections like “Experience,” “Education,” and “Skills.”
            </li>
            <li>
              <strong>Scoring and Ranking:</strong>  
              The ATS scores each resume based on the number and quality of keyword matches, relevant experience, and sometimes even formatting.
            </li>
            <li>
              <strong>Shortlisting:</strong>  
              Only the highest-matching resumes are moved forward for human review—others may never be seen by a recruiter.
            </li>
          </ul>
        </section>

        <section>
          <h2>Why Do Many Great Candidates Get Missed?</h2>
          <ul>
            <li>
              Resumes without the right keywords, or in an unusual format, may be filtered out.
            </li>
            <li>
              Cover letters that don’t address job requirements can weaken your application.
            </li>
            <li>
              Subtle mismatches (job title wording, missing skills) can lower your ATS score.
            </li>
          </ul>
        </section>

        <section>
          <h2>How Brew My Job Helps You Beat the ATS</h2>
          <p>Brew My Job’s advanced AI tools are built to maximize your chance of passing ATS filters and landing interviews.</p>

          <h3>1. Resume Scanner</h3>
          <ul>
            <li>Upload your resume and paste the job description.</li>
            <li>Our Resume Scanner analyzes both documents, extracting keywords and job-specific skills.</li>
            <li>Instantly see your <strong>match rate</strong>—how well your resume aligns with the job requirements.</li>
            <li>Get a detailed report:
              <ul>
                <li>Which keywords are present or missing</li>
                <li>Skill gaps</li>
                <li>Formatting suggestions</li>
                <li>Actionable tips to improve your match rate</li>
              </ul>
            </li>
          </ul>

          <h3>2. Cover Letter Generator</h3>
          <ul>
            <li>Our AI drafts a customized cover letter based on your resume and the job description.</li>
            <li>The generated cover letter:
              <ul>
                <li>Addresses the employer’s needs using relevant keywords</li>
                <li>Highlights your top skills and achievements for the role</li>
                <li>Maintains a professional tone and correct structure</li>
              </ul>
            </li>
          </ul>

          <h3>3. Continuous Optimization</h3>
          <ul>
            <li>Make changes in real time: Update your resume or job description, and instantly see new match results.</li>
            <li>Use multiple templates to ensure your documents are ATS-friendly and recruiter-approved.</li>
          </ul>
        </section>

        <section>
          <h2>Key Benefits of Using Brew My Job</h2>
          <ul>
            <li><strong>Save time</strong> and avoid guesswork with instant, automated feedback.</li>
            <li><strong>Stand out</strong> by matching your documents to each job—no more generic applications.</li>
            <li><strong>Increase interview chances</strong> by passing ATS filters and impressing recruiters.</li>
          </ul>
        </section>

        <section>
          <h2>Summary</h2>
          <p>
            With Brew My Job’s Resume Scanner and Cover Letter Generator, you’ll always know how your application compares to the job requirements—and have the tools to improve your chances of landing your next role.
          </p>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default AtsInsight
