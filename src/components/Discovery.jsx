
import React, { useState,useEffect } from "react";
import Popup from '../components/Popup.js'
import './stylesheets/Discovery.css';

const Discovery = ({ games }) => {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [selectedGame, setSelectedGame] = useState(null);
    games = [
        { id: 1, name: 'Elden Ring', year: '2024', activePlayers: '5000', description: "A fantasy action role-playing game (RPG) developed by FromSoftware and released in February 2022. The game is set in the Lands Between, a world created by Hidetaka Miyazaki and George R.R. Martin, where players control a customizable character on a quest to become the Elden Lord and repair the Elden Ring", image: '../imgs/elden-ring.webp' },
        { id: 2, name: 'Call of Duty: Black Ops 2', year: '2024', activePlayers: '4000', description: "A first-person shooter video game released in 2012 by Treyarch and Activision that takes place in two different time periods: the late 1980s and 2025. The game's campaign follows the story of David Mason, the son of the main character from the previous game, Alex Mason, as he tries to stop a villain named Raul Menendez from starting a Second Cold War and destroying the world.", image: '../imgs/codbo21.png' },
        { id: 3, name: 'Grand Theft Auto V', year: '2024', activePlayers: '5000', description: "An action-adventure game developed by Rockstar North and published by Rockstar Games. Released in 2013, it is set in the fictional state of San Andreas, which is heavily based on Southern California. The game features a sprawling open world that players can explore at their leisure. The story follows three protagonists—Michael De Santa, a retired bank robber; Franklin Clinton, a street hustler; and Trevor Philips, a violent psychopath—as they commit heists while under pressure from a corrupt government agency and powerful criminals.", image: '../imgs/gta5.jpg' },
        { id: 4, name: 'Counter Strike 2', year: '2024', activePlayers: '4000', description: "a first-person shooter game developed by Valve Corporation. As a successor to the iconic Counter-Strike: Global Offensive (CS), it retains the core mechanics that define the series: tactical gameplay, team-based objectives, and a focus on skill and precision. Players can choose to join either the terrorist or counter-terrorist teams, engaging in various modes such as bomb defusal and hostage rescue. CS2 is known for its competitive play, strategic depth, and a robust esports scene.", image: '../imgs/cs2.jpeg' }
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
    const handleCardClick = (game) => {
        setPopupVisible(true);
        setSelectedGame(game);
      };
    
      const handleClosePopup = () => {
        setPopupVisible(false);
        setSelectedGame(null);
      };
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
                            <div key={game.id} className="game-card" onClick={() => handleCardClick(game)}>
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
            {isPopupVisible && (
              <Popup
                game={selectedGame}
                onClose={handleClosePopup}
              />
            )}
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
