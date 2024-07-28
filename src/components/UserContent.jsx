import React from "react";

import Reviews from "./Reviews";
import Ratings from "./Ratings";

const UserContent = ( {reviews, ratings} ) => {

    const containerStyle = {
        padding: '10px 20px',
        maxWidth: '1200px',
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'flex-start',
        flexWrap: 'wrap'
    };

    return (
        <div style={containerStyle}>
            <Reviews reviews={reviews}></Reviews>
            <Ratings ratings={ratings}></Ratings>
        </div>
    )
}

export default UserContent;