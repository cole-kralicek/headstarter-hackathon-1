import React, { useState } from 'react';

import './stylesheets/ReviewForm.css';

const ReviewForm = () => {
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [username, setUsername] = useState('');

  const handleReviewChange = (e) => {
    setReviewText(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(parseInt(e.target.value));
  };

  const handleUsername = (e) => {
    setUsername(e.target.value); 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send to server
    console.log('Review submitted:', { username, reviewText, rating });

    setSubmitted(true);
  };

  return (
    <div className="review-form">
      <h2>Write a Review</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="rating">Rating:</label>
          <select id="rating" value={rating} onChange={handleRatingChange}>
            {[1, 2, 3, 4, 5].map((rate) => (
              <option key={rate} value={rate}>
                {rate}
              </option>
            ))}
          </select>
        </div>
        <div>
            <label htmlFor='username'>Username:</label>
            <textarea id="username" value={username} onChange={handleUsername} rows="1" placeholder='Username'/>
        </div>
        <div>
          <label htmlFor="reviewText">Review:</label>
          <textarea id="reviewText" value={reviewText} onChange={handleReviewChange} rows="5" placeholder="Write your review here..."
          />
        </div>
        <button type="submit">Submit Review</button>
      </form>
      {submitted && <p>Submitted.</p>}
    </div>
  );
};

export default ReviewForm;
