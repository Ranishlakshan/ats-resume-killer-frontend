import React, { useRef } from 'react';
import './CustomerReview.css';

const reviews = [
  { name: "Sarah M.", review: "Amazing tool! My interview calls doubled after using ATS Killer.", rating: 5 },
  { name: "James L.", review: "Easy to use and helped me understand what recruiters want.", rating: 4 },
  { name: "Alicia K.", review: "Loved the keyword matching! It really boosted my confidence.", rating: 5 },
  { name: "David P.", review: "Very insightful, the match report is a game changer.", rating: 5 },
  { name: "Emily T.", review: "Great for tailoring my resume to each job, highly recommended.", rating: 4 },
];

function StarRating({ count }) {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, i) => (
        <span key={i} style={{ color: i < count ? '#fbbf24' : '#d1d5db', fontSize: 18 }}>★</span>
      ))}
    </div>
  );
}

const CustomerReview = () => {
  const listRef = useRef(null);

  const scroll = (direction) => {
    if (listRef.current) {
      listRef.current.scrollBy({
        left: direction === 'left' ? -320 : 320,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="customer-review-section">
      <div className="review-arrows-row">
        <button className="arrow-btn" onClick={() => scroll('left')} aria-label="Scroll left">
          &#8592;
        </button>
        <h2 className="review-section-title">What our users say</h2>
        <button className="arrow-btn" onClick={() => scroll('right')} aria-label="Scroll right">
          &#8594;
        </button>
      </div>
      <div className="review-card-list" ref={listRef}>
        {reviews.map((r, idx) => (
          <div className="review-card" key={idx}>
            <div className="review-text">"{r.review}"</div>
            <StarRating count={r.rating} />
            <div className="review-author">– {r.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;
