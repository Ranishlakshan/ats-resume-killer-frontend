import React from 'react'
import HeaderContent from '../../../Components/HeaderContent/HeaderContent'
import Footer from '../../../Components/Footer/Footer'
import './ResumeTips.css'

function ResumeTips() {
  return (
    <>
      <HeaderContent />
      <div className="resume-tips-container">
        <h1>Resume & Cover Letter Tips</h1>

        {/* Resume Tips */}
        <section>
          <h2>1. Resume Tips</h2>

          <h3>A. Formatting & Design</h3>
          <ul>
            <li><strong>Keep it clean and simple:</strong> Use a modern, easy-to-read font (like Arial, Calibri, or Helvetica), and keep font size 10–12pt.</li>
            <li><strong>Use consistent headings:</strong> Bold or larger font for section titles (e.g., Experience, Education).</li>
            <li><strong>Use bullet points:</strong> Make achievements and skills easy to scan.</li>
            <li><strong>Stick to 1–2 pages:</strong> Only include relevant information.</li>
            <li><strong>Leave enough white space:</strong> Avoid clutter; make your resume visually balanced.</li>
          </ul>

          <h3>B. Content & Structure</h3>
          <ul>
            <li><strong>Contact info at the top:</strong> Name, phone, email, LinkedIn (no need for full address).</li>
            <li><strong>Professional summary:</strong> 2–3 lines highlighting your background and value proposition.</li>
            <li><strong>Experience section:</strong> List jobs in reverse chronological order, with company, job title, location, and dates.</li>
            <li><strong>Use action verbs:</strong> E.g., “Developed”, “Managed”, “Led”, “Achieved”, “Designed”.</li>
            <li><strong>Quantify achievements:</strong> “Increased sales by 30%”, “Managed a team of 6”, “Reduced costs by $10,000/year”.</li>
          </ul>

          <h3>C. ATS & Keywords</h3>
          <ul>
            <li><strong>Tailor to the job:</strong> Match your keywords to the job description (skills, tools, qualifications).</li>
            <li><strong>Avoid tables/columns:</strong> Some Applicant Tracking Systems (ATS) can’t read them well.</li>
            <li><strong>Use standard section headings:</strong> (Experience, Skills, Education, Certifications).</li>
          </ul>

          <h3>D. Skills & Certifications</h3>
          <ul>
            <li><strong>Highlight hard and soft skills:</strong> Separate technical (hard) skills and interpersonal (soft) skills.</li>
            <li><strong>Include certifications:</strong> Relevant to your industry (e.g., AWS Certified, PMP, CPA).</li>
          </ul>

          <h3>E. Proofreading</h3>
          <ul>
            <li><strong>Check for typos and grammar errors:</strong> Use spell check and ask a friend to review.</li>
            <li><strong>Consistency:</strong> Dates, locations, tenses (use present tense for current roles, past tense for past roles).</li>
          </ul>
        </section>

        {/* Cover Letter Tips */}
        <section>
          <h2>2. Cover Letter Tips</h2>

          <h3>A. Formatting & Structure</h3>
          <ul>
            <li><strong>Keep it to one page:</strong> 3–4 short paragraphs.</li>
            <li><strong>Use a professional greeting:</strong> “Dear [Hiring Manager’s Name],” or “Dear Hiring Team,” if you can’t find a name.</li>
            <li><strong>Include contact info:</strong> Match your resume header or include in your email signature.</li>
          </ul>

          <h3>B. Content</h3>
          <ul>
            <li><strong>Opening paragraph:</strong> State the position you’re applying for and a brief intro.</li>
            <li><strong>Second paragraph:</strong> Highlight 1–2 key achievements or skills relevant to the role. Show how you solve the employer’s problem.</li>
            <li><strong>Third paragraph:</strong> Show cultural fit and why you want to join this company.</li>
            <li><strong>Closing paragraph:</strong> Thank them for their time, mention your attached resume, and express willingness for an interview.</li>
          </ul>

          <h3>C. Personalization</h3>
          <ul>
            <li><strong>Tailor each letter:</strong> Reference the company, job posting, and use their keywords.</li>
            <li><strong>Mention referrals:</strong> If someone at the company referred you, say so at the start.</li>
          </ul>

          <h3>D. Tone & Details</h3>
          <ul>
            <li><strong>Be confident but humble:</strong> Don’t just repeat your resume; show passion for the role.</li>
            <li><strong>Use specific examples:</strong> “At [previous company], I improved X by Y%...”</li>
            <li><strong>Be genuine:</strong> Employers notice copy-paste letters.</li>
          </ul>

          <h3>E. Proofreading</h3>
          <ul>
            <li><strong>Check spelling and grammar:</strong> Avoid careless errors.</li>
            <li><strong>Double-check company and contact names:</strong> Nothing looks worse than “Dear Google” for a Microsoft job!</li>
          </ul>
        </section>

        {/* Bonus & Advanced */}
        <section>
          <h2>3. Bonus: Common Mistakes to Avoid</h2>
          <ul>
            <li>Using the same resume/cover letter for every job.</li>
            <li>Including irrelevant experience or outdated skills.</li>
            <li>Using clichés (“team player”, “go-getter”) without backing them up.</li>
            <li>Focusing on duties, not achievements.</li>
            <li>Forgetting to update contact info.</li>
          </ul>
        </section>

        <section>
          <h2>4. Advanced Tips</h2>
          <ul>
            <li><strong>Use metrics:</strong> Numbers jump off the page (“Reduced onboarding time by 25%”).</li>
            <li><strong>Include keywords naturally:</strong> For both ATS and human reviewers.</li>
            <li><strong>Keep design accessible:</strong> Use black text on white, avoid images and fancy borders.</li>
            <li><strong>Show results, not just tasks:</strong> Focus on outcomes and value you brought.</li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default ResumeTips
