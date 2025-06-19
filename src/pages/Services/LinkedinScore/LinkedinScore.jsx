import React, { useState } from 'react'
import HeaderContent from '../../../Components/HeaderContent/HeaderContent'
import Footer from '../../../Components/Footer/Footer'
import Sidebar from '../../../Components/Sidebar/Sidebar'
import './LinkedinScore.css'

function LinkedinScore() {
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [resultHtml, setResultHtml] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!linkedinUrl) return;
    setLoading(true);
    setResultHtml('');
    try {
      const response = await fetch('https://api.brewmyjob.com/api/analyze-linkedin-profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ linkedinUrl }),
      });
      const data = await response.json();
      setResultHtml(data.reviewHtml); // Only expect reviewHtml as string
    } catch (error) {
      setResultHtml('<div style="color:red;">Failed to analyze profile.</div>');
    }
    setLoading(false);
  };

  return (
    <>
      <HeaderContent />
      <div className="linkedin-layout">
        <Sidebar />
        <main className="linkedin-score-main">
          <div className="linkedin-score-container">
            <h2>LinkedIn Profile Score</h2>
            <div className="score-note">
              <p>
                🚀 <b>LinkedIn Score:</b> Use this feature to analyze your LinkedIn profile and get instant feedback! We’ll give you a score out of 100, plus personalized tips to help you stand out to recruiters.
              </p>
              <p>
                Paste your LinkedIn profile link and get actionable insights on how to improve your professional branding, visibility, and job search success.
              </p>
              <div className="score-input-row">
                <input
                  type="text"
                  className="linkedin-url-input"
                  value={linkedinUrl}
                  onChange={e => setLinkedinUrl(e.target.value)}
                  placeholder="Paste your LinkedIn profile URL here..."
                />
                <button className="score-analyze-btn" onClick={handleAnalyze} disabled={loading}>
                  {loading ? "Analyzing..." : "Analyze"}
                </button>
              </div>
              <div style={{ marginTop: 28 }}>
                {resultHtml && (
                  <div dangerouslySetInnerHTML={{ __html: resultHtml }} />
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default LinkedinScore
