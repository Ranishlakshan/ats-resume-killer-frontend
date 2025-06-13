import React from 'react'
import HeaderContent from '../../../Components/HeaderContent/HeaderContent'
import Footer from '../../../Components/Footer/Footer'
import './Ebooks.css'

function Ebooks() {
  return (
    <>
      <HeaderContent />
      <div className="ebooks-container">
        <h1>Ebooks & Learning Materials</h1>
        <p>
          Welcome to the Brew My Job learning hub! Here, you'll soon find a curated collection of ebooks, guides, and resources to help you master the art of job searching, resume building, and career development.<br/><br/>
          Stay tuned for expert tips, downloadable materials, and practical insights—everything you need to advance your career journey and land your dream job.
        </p>
        {/* Future: Add a list/grid of available ebooks and guides here */}
      </div>
      <Footer />
    </>
  )
}

export default Ebooks
