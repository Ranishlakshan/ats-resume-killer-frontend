import React, { useState } from 'react'
import HeaderContent from '../../../Components/HeaderContent/HeaderContent'
import Footer from '../../../Components/Footer/Footer'
import './Questions.css'

const faqList = [
  {
    q: "What is Brew My Job?",
    a: "Brew My Job is an AI-powered platform designed to help job seekers optimize their resumes, generate custom cover letters, and match their applications with job descriptions—making it easier to land interviews and your dream job."
  },
  {
    q: "How does the resume scan and keyword match feature work?",
    a: "Simply upload your resume and paste a job description. Our AI scans both, highlights important keywords, and shows you how well your resume matches the job—plus tips to boost your match rate."
  },
  {
    q: "Can I generate a cover letter for any job?",
    a: "Yes! Our Cover Letter Generator creates tailored cover letters based on your resume and the job description, so you can make a strong first impression every time."
  },
  {
    q: "What types of resume and cover letter templates do you offer?",
    a: "We provide a variety of modern, ATS-friendly resume and cover letter templates designed to pass applicant tracking systems and impress recruiters."
  },
  {
    q: "Is Brew My Job free to use?",
    a: "We offer a free plan with core features like resume scanning and keyword matching. Premium users unlock unlimited scans, advanced templates, and additional optimization tools."
  },
  {
    q: "How do I upgrade or manage my subscription?",
    a: "Go to the 'Pricing & Plans' section in your dashboard. You can easily upgrade, downgrade, or cancel your subscription at any time."
  },
  {
    q: "Is my personal data and uploaded documents safe?",
    a: "Absolutely. We use industry-standard security measures to protect your information. Your uploaded resumes and cover letters are never shared with third parties."
  },
  {
    q: "I forgot my password or can't access my account—what should I do?",
    a: "Click on 'Forgot Password' at the login screen and follow the instructions to reset your password. If you need further help, contact our support team."
  },
  {
    q: "Can recruiters or employers access my resume through Brew My Job?",
    a: "No. Your information remains private unless you explicitly choose to share it. However, our platform does offer advanced tools for recruiters to analyze bulk resumes (for recruiters' dashboard users)."
  },
  {
    q: "How can I contact support or share feedback?",
    a: "You can reach us through the 'Contact Us' page or email us at ranishkalakshangsc@gmail.com. We welcome all feedback and suggestions to make Brew My Job even better!"
  }
];

function Questions() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = idx => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <>
      <HeaderContent />
      <div className="questions-container">
        <h1>Frequently Asked Questions</h1>
        <div className="faq-list">
          {faqList.map((item, idx) => (
            <div className={`faq-item ${openIndex === idx ? 'open' : ''}`} key={idx}>
              <button
                className="faq-question"
                onClick={() => toggle(idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                <span className="faq-q-text">{item.q}</span>
                <span className={`faq-toggle-icon ${openIndex === idx ? 'open' : ''}`}>
                  {openIndex === idx ? '−' : '+'}
                </span>
              </button>
              <div
                className="faq-answer"
                id={`faq-answer-${idx}`}
                style={{ display: openIndex === idx ? 'block' : 'none' }}
              >
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Questions
