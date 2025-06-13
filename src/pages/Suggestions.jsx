import React, { useState } from 'react'
import HeaderContent from '../Components/HeaderContent/HeaderContent'
import Footer from '../Components/Footer/Footer'
import './Suggestions.css'

function Suggestions() {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    // For production: send to backend or email here!
  }

  return (
    <>
      <HeaderContent />
      <div className="suggestions-main-container">
        <div className="suggestions-info-panel">
          <h1>Suggestions & Feedback</h1>
          <p>
            Your feedback helps us improve <strong>Brew My Job</strong> and serve you better.
            We welcome all your ideas, feature requests, and suggestions for making job hunting easier and smarter!
          </p>
          <ul>
            <li>💡 Found a bug? Let us know!</li>
            <li>🌟 Want a new feature? Suggest it here.</li>
            <li>👏 Enjoying the platform? Give us a rating!</li>
          </ul>
          <p>
            You can also email us at <a href="mailto:ranishkalakshangsc@gmail.com">ranishkalakshangsc@gmail.com</a>.
          </p>
        </div>
        <div className="suggestions-form-panel">
          {!submitted ? (
            <form className="suggestions-form" onSubmit={handleSubmit}>
              <h2>Share Your Thoughts</h2>
              <div className="form-group">
                <label>Email (optional)</label>
                <input type="email" name="email" placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label>Your Feedback or Suggestion</label>
                <textarea name="feedback" rows="5" required placeholder="Tell us how we can improve, or what you love!" />
              </div>
              <div className="form-group">
                <label>Rate Your Experience</label>
                <div className="star-rating">
                  {[1,2,3,4,5].map(star => (
                    <span
                      key={star}
                      className={star <= (hover || rating) ? "star filled" : "star"}
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHover(star)}
                      onMouseLeave={() => setHover(0)}
                      role="button"
                      aria-label={`Rate ${star} out of 5`}
                    >★</span>
                  ))}
                  <span className="rating-value">{rating > 0 ? rating + "/5" : ""}</span>
                </div>
              </div>
              <button type="submit" className="suggestions-btn">Submit Feedback</button>
            </form>
          ) : (
            <div className="thankyou-msg">
              Thank you for your feedback! We appreciate your input and will use it to improve Brew My Job.
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Suggestions
