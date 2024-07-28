
import React, { useState, useEffect } from "react";

import './stylesheets/Discovery.css';
import { fetchPopularGames } from "../apiService";

const Discovery = () => {
    const [games, setGames] = useState([]);
    const [error, setError] = useState(''); 

    useEffect(() => {
        const loadGames = async () => {
            try {
                const gamesData = await fetchPopularGames();
                setGames(gamesData);
            } catch(error) {
                setError(error.message); 
            }
        };
    
        loadGames();
      }, []);

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
                {error && <div>{error}</div>}
                <div className="game-list-scroll">
                    <div className="game-list">
                        {games.slice(0, 4).map((game) => (
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
            <section className="categories">
                <h2>Browse by Category</h2>
                <div className="game-list">
                    {categories.map((cat) => (
                        <div key={cat} className="game-card">
                            <div className="game-info">
                                <h3>{cat}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="why-us">
                <h2>Why Use Backseat?</h2>
                <h3>Organize Your Gaming Library</h3>
                <p>Backseat helps you keep track of all the games you've completed and those you wish to play. Easily catalog your collection, create custom playlists, and manage your gaming library in one place.</p>
                <h3>Rate and Rewview Games.</h3>
                <p>Share your thoughts and feedback on the games you’ve played. Rate games and write reviews to help others discover great titles or avoid less enjoyable ones. Your insights contribute to a vibrant community of informed gamers.</p>
                <h3>Discover New Games</h3>
                <p>With user reviews, ratings, and curated playlists, Backseat is an excellent resource for finding new games that align with your tastes. Leverage the community’s collective knowledge to discover your next favorite game.</p>
            </section>
        </div>
    )
}

export default Discovery;