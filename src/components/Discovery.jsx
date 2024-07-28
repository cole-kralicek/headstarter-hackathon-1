
import React from "react";

import './stylesheets/Discovery.css';

const Discovery = ({ games }) => {
    // Games being an array of games objects of the most popular games
    games = [
        { id: 1, name: 'Elden Ring', year: '2024', activePlayers: '5000', description: 'Game description here', image: '../imgs/elden-ring.webp' },
        { id: 2, name: 'Call of Duty', year: '2024', activePlayers: '4000', description: 'Game description here', image: '../imgs/codbo21.png' },
        { id: 3, name: 'Elden Ring', year: '2024', activePlayers: '5000', description: 'Game description here', image: '../imgs/elden-ring.webp' },
        { id: 4, name: 'Call of Duty', year: '2024', activePlayers: '4000', description: 'Game description here', image: '../imgs/elden-ring.webp' }
    ];

    const categories = [
        "Action",
        "First-Person Shooter",
        "Arcade",
        "Role-playing Game",
        "Adventure",
        "Simulation",
        "Racing"
    ];

    return (
        <div className="discovery">
            <section>
                <div className="discovery-cover">
                    <div className="discovery-cover-image"></div>
                    <a href="/library">
                        <button className="discovery-cover-button">Start!</button>
                    </a>
                </div>
                <p className="slogan">Backseat takes the effort out of organizing your library.</p>
            </section>
            <section className="games">
                <h2>Trending Games</h2>
                <div className="game-list-scroll">
                    <div className="game-list">
                        {games.map((game) => (
                            <div key={game.id} className="game-card">
                                <img src={game.image} alt={game.name} className="game-image"></img>
                                <div className="game-info">
                                    <h3>{game.name}</h3>
                                    <p>Your rating: 0/5</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="parent-container">
            <div className="wip">
                <h2>Work in Progress</h2>
            </div>
            <section className="categories">
                <h2>Browse by Category</h2>
                <div className="game-list">
                    {categories.map((cat) => (
                        <div key={cat} className="category-card">
                            <div className="category-info">
                                <h3>{cat}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                </section>
                </div>

            <section className="why-us">
                <div>
                    <h2>Why Use Backseat?</h2>
                </div>

                <div className="why-us-text">
                    <h3>Organize Your Gaming Library</h3>
                    <p>Backseat helps you keep track of all the games you've completed and those you wish to play. Easily catalog your collection, create custom playlists, and manage your gaming library in one place.</p>
                </div>
                <div className="why-us-text">
                    <h3>Rate and Review Games</h3>
                    <p>Share your thoughts and feedback on the games you’ve played. Rate games and write reviews to help others discover great titles or avoid less enjoyable ones. Your insights contribute to a vibrant community of informed gamers.</p>
                </div>
                <div className="why-us-text">
                    <h3>Discover New Games</h3>
                    <p>With user reviews, ratings, and curated playlists, Backseat is an excellent resource for finding new games that align with your tastes. Leverage the community’s collective knowledge to discover your next favorite game.</p>
                </div>



            </section>
        </div>
    )
}

export default Discovery;
