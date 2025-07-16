import React from 'react'
import HeaderContent from '../../../Components/HeaderContent/HeaderContent'
import Footer from '../../../Components/Footer/Footer'
import './ResumeRejectionArticle.css'
import { useNavigate } from 'react-router-dom'

function ResumeRejectionArticle() {
  const navigate = useNavigate();

  const handleTryNowClick = () => {
    navigate('/');
  };

  return (
    <>
      <HeaderContent />
      <div className="article-banner">
        <h1>Wondering Why Your Resume Keeps Getting Rejected?</h1>
        <p>Let BrewMyJob identify the problems — and help you fix them with AI-powered insights.</p>
        <button className="try-now-button" onClick={handleTryNowClick}>
          Try It Now — Free
        </button>
      </div>

      <div className="article-container">
        <h1>Why Your Resume Keeps Getting Rejected (and How to Fix It)</h1>

        <p>
          You've spent hours crafting your resume, tailored it to your background, and applied to job after job — but still, no responses. If this sounds familiar, you're not alone. Most job seekers make crucial errors that cause their resumes to be filtered out before a human ever sees them.
        </p>

        <p>
          In today’s job market, where over 75% of companies use Applicant Tracking Systems (ATS), formatting and content mistakes can mean automatic rejection. In this article, we’ll explore the most common reasons resumes are rejected, and how you can use BrewMyJob to detect and fix them before you apply.
        </p>

        <h2>🚫 1. Bad Formatting Breaks the ATS</h2>
        <p>
          Many beautifully designed resumes fail because ATS software can't read them. Graphics, tables, columns, and non-standard fonts often confuse the parsing engine, leading to missing or jumbled information.
        </p>
        <ul>
          <li>❌ Avoid: Tables, side-by-side columns, icons, background images</li>
          <li>✅ Use: Standard fonts (Arial, Calibri), left-aligned text, and clear headings</li>
        </ul>
        <p>
          BrewMyJob scans your resume and flags any structural issues that could prevent ATS from reading your data correctly.
        </p>

        <h2>🔑 2. Keyword Mismatch = Irrelevance</h2>
        <p>
          The biggest reason resumes get rejected? They don’t match the job description. ATS software ranks resumes based on keyword relevance. If the job post says “project lifecycle management” and your resume says “project planning,” you might score low.
        </p>
        <ul>
          <li>❌ Don’t rely on generic phrases like “hard worker” or “team player”</li>
          <li>✅ Use keywords pulled directly from the job description (skills, tools, experience)</li>
        </ul>
        <p>
          With BrewMyJob, just paste your resume and the job description — and it will instantly highlight what’s missing.
        </p>

        <h2>🧠 3. Lack of Focus or Clarity</h2>
        <p>
          Many resumes try to do too much — listing every job you’ve had or stuffing irrelevant experiences. Recruiters want to see how you fit the specific role you're applying for.
        </p>
        <ul>
          <li>❌ Avoid cluttering your resume with unrelated experience</li>
          <li>✅ Customize each resume to the role</li>
        </ul>
        <p>
          BrewMyJob helps you focus by aligning your strongest skills with the job’s requirements.
        </p>

        <h2>🧾 4. No Quantified Achievements</h2>
        <p>
          Employers want results — not just responsibilities. “Managed social media accounts” is less effective than “Increased Instagram engagement by 45% in 6 months.”
        </p>
        <ul>
          <li>✅ Use numbers to measure impact</li>
          <li>✅ Start each bullet point with a strong action verb</li>
        </ul>

        <h2>🔍 5. You Didn’t Tailor Your Resume</h2>
        <p>
          Submitting the same resume to every job won’t work in 2025. Each job is unique, and so your resume should be, too. BrewMyJob makes this easy.
        </p>
        <p>
          After uploading your resume and a job description, BrewMyJob will show you an exact match score, along with suggestions to improve that score.
        </p>

        <h2>📷 Sample Report from BrewMyJob</h2>
        <p>
          Below is an example of what BrewMyJob shows you when you run a scan:
        </p>
        <img src="/assets/sample-report.png" alt="Sample BrewMyJob Report" style={{ width: '100%', borderRadius: '8px', marginBottom: '30px' }} />
        <ul>
          <li>✅ Match Score: 73%</li>
          <li>❌ Missing Keywords: Product lifecycle, Agile, Stakeholder communication</li>
          <li>✅ Suggestions: Add more relevant achievements, update summary with job title</li>
        </ul>

        <h2>👀 Real Use Case</h2>
        <p>
          Sarah, a marketing analyst, applied to 25 roles without hearing back. She used BrewMyJob and realized her resume was missing keywords like “campaign ROI” and “A/B testing.” After optimizing with BrewMyJob, she got 3 interview calls in one week.
        </p>
        <blockquote>
          “I didn’t even realize my resume wasn’t getting through. BrewMyJob showed me exactly what to fix. It was a game-changer.” — Sarah M.
        </blockquote>

        <h2>💡 Final Fixes You Can Make Right Now</h2>
        <ul>
          <li>✅ Use consistent formatting across all sections</li>
          <li>✅ Remove outdated or irrelevant roles</li>
          <li>✅ Add skills that are in demand for your industry</li>
          <li>✅ Focus on results — not responsibilities</li>
        </ul>

        <h2>🚀 Ready to Fix Your Resume?</h2>
        <p>
          Don’t let small mistakes cost you job opportunities. Let <strong>BrewMyJob</strong> analyze your resume, compare it to your dream job posting, and guide you with AI-powered suggestions.
        </p>
        <p>
          <strong><a href="/">Try BrewMyJob for free today</a></strong> — no sign-up required.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default ResumeRejectionArticle;
