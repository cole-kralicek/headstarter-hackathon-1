import React from "react";

import "./stylesheets/Ratings.css";

const Ratings = ( {ratings} ) => {
    return (
        <div className="ratings-container">
            <h2>Ratings</h2>
            {ratings.map(rating => (
                <div key={rating.id} className="rating">
                    <h3>{rating.username}</h3>
                    <p>{rating.rating}</p>
                </div>
            ))}
        </div>
    )
}

export default Ratings;