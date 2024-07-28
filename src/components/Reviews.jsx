import React from 'react';

import './stylesheets/Reviews.css';

const Reviews = ({ reviews }) => {
    return (
        <div className="reviews-container">
            <h2>User Reviews</h2>
            {reviews.map(review => (
                <div key={review.id} className="review">
                    <h3>{review.username}</h3>
                    <div className="rating">Rating: {review.rating}/5</div>
                    <p>{review.comment}</p>
                </div>
            ))}
        </div>
    );
};

export default Reviews;