
import React from "react";

import './stylesheets/Discovery.css';

const Discovery = ({ games }) => {
    // Games being an array of games objects of the most popular games
    games = [
        { id: 1, name: 'Elden Ring', year: '2024', activePlayers: '5000', description: 'Game description here', image: '../imgs/elden-ring.webp' },
        { id: 2, name: 'Call of Duty', year: '2024', activePlayers: '4000', description: 'Game description here', image: '../imgs/elden-ring.webp' }
    ];

    return (
        <div className="discovery">
            <div className="discovery-landing">
                <h2>Trending Games</h2>
                <div className="game-list">
                    {games.map((game) => (
                        <div key={game.id} className="game-card">
                            <img src={game.image} alt={game.name} className="game-image"></img>
                            <div className="game-info">
                                <h3>{game.name}</h3>
                                <p>Players: {game.activePlayers}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Discovery;