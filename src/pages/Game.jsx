import React from "react";

import GameDetails from "../components/GameDetails";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserContent from "../components/UserContent";
import ReviewForm from "../components/ReviewForm";


const Game = ( {id} ) => {

    const reviews = [
        { id: 1, username: 'User1', rating: 5, comment: 'Amazing game! Highly recommend it.' },
        { id: 2, username: 'User2', rating: 4, comment: 'Great gameplay, but could use more content.' },
        { id: 3, username: 'User3', rating: 5, comment: "One of the best games I've played this year!"},
    ];

    const ratings = [
        { id: 1, username: 'User4', rating: 5},
        { id: 2, username: 'User5', rating: 4},
        { id: 3, username: 'User6', rating: 5},
    ];

    return (
        <div>
            <Header/>
            <GameDetails gameId={id}/>
            <ReviewForm/>
            <UserContent reviews={reviews} ratings={ratings}/>
            <Footer/>
        </div>
    )
}

export default Game;