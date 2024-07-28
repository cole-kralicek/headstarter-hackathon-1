import React from "react";
import GameDetails from "../components/GameDetails";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
import UserContent from "../components/UserContent";
import ReviewForm from "../components/ReviewForm";

const Game = () => {
    const games = [
        { id: 1, name: 'Elden Ring', year: '2024', activePlayers: '5000', description: 'Game description here', image: '../imgs/elden-ring.webp' },
        { id: 2, name: 'Call of Duty', year: '2024', activePlayers: '4000', description: 'Game description here', image: '../imgs/elden-ring.webp' },
        { id: 3, name: 'Elden Ring', year: '2024', activePlayers: '5000', description: 'Game description here', image: '../imgs/elden-ring.webp' },
        { id: 4, name: 'Call of Duty', year: '2024', activePlayers: '4000', description: 'Game description here', image: '../imgs/elden-ring.webp' }
    ];

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
            <GameDetails/>
            <ReviewForm/>
            <UserContent reviews={reviews} ratings={ratings}/>
            <Footer/>
        </div>
    )
}

export default Game;