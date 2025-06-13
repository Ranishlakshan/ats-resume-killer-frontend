import React, { useRef, useState } from 'react'
import HeaderContent from '../Components/HeaderContent/HeaderContent'
import Footer from '../Components/Footer/Footer'
import emailjs from 'emailjs-com'
import './Contact.css'

function Contact() {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_7oqysva', // Replace with your EmailJS Service ID
      'template_4i4wdml', // Replace with your EmailJS Template ID
      form.current,
      'f1PHAn8hzC1Z0XHdI' // Replace with your EmailJS User/Public Key
    ).then(
      () => setDone(true),
      () => alert('Something went wrong. Please try again later.')
    );
  };

  return (
    <>
      <HeaderContent/>
      <div className="contact-main-container">
        <div className="contact-info-panel">
          <h1>Contact Us</h1>
          <p>We’d love to hear from you! Reach out via email or connect on social media.</p>
          <div className="contact-detail">
            <strong>Email:</strong>
            <a href="mailto:ranishkalakshangsc@gmail.com">ranishkalakshangsc@gmail.com</a>
          </div>
          <div className="contact-detail">
            <strong>Follow us:</strong>
            <div className="social-links">
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                <img src="/images/linkedin-icon.png" alt="LinkedIn" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <img src="/images/twitter-icon.png" alt="Twitter" />
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                <img src="/images/facebook-icon.png" alt="Facebook" />
              </a>
              {/* Add more as needed */}
            </div>
          </div>
          <div className="contact-detail">
            <strong>Address:</strong>
            <p>Toronto, ON, Canada</p>
          </div>
        </div>
        <div className="contact-form-panel">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <h2>Send a Message</h2>
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="user_name" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="user_email" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" rows="5" required />
            </div>
            <button type="submit" className="contact-btn">Send</button>
            {done && <div className="thankyou-msg">Thank you for reaching out! We’ll get back to you soon.</div>}
          </form>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Contact
