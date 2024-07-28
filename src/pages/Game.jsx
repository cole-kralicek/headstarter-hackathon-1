import React from "react";
import GameDetails from "../components/GameDetails";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Game = () => {
    const games = [
        { id: 1, name: 'Elden Ring', year: '2024', activePlayers: '5000', description: 'Game description here', image: '../imgs/elden-ring.webp' },
        { id: 2, name: 'Call of Duty', year: '2024', activePlayers: '4000', description: 'Game description here', image: '../imgs/elden-ring.webp' },
        { id: 3, name: 'Elden Ring', year: '2024', activePlayers: '5000', description: 'Game description here', image: '../imgs/elden-ring.webp' },
        { id: 4, name: 'Call of Duty', year: '2024', activePlayers: '4000', description: 'Game description here', image: '../imgs/elden-ring.webp' }
    ];

    return (
        <div>
            <Header/>
            <GameDetails/>
            <Footer/>
        </div>
    )
}

export default Game;