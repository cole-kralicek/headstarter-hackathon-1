import React, { useState, useEffect } from 'react';
import Card from '../components/Card.js'
import Popup from '../components/Popup.js'
import Header from '../components/Header.js';
import Footer from '../components/Footer.jsx';
import { fetchPopularGames } from '../apiService';


const Library = () => {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const CACHE_VERSION = '1.1';

  const games1 = [
    { id: 1, name: 'Elden Ring', year: '2024', activePlayers: '5000', description: "A fantasy action role-playing game (RPG) developed by FromSoftware and released in February 2022. The game is set in the Lands Between, a world created by Hidetaka Miyazaki and George R.R. Martin, where players control a customizable character on a quest to become the Elden Lord and repair the Elden Ring", image: '../imgs/elden-ring.webp' },
    { id: 2, name: 'Call of Duty: Black Ops 2', year: '2024', activePlayers: '5000', description: "A first-person shooter video game released in 2012 by Treyarch and Activision that takes place in two different time periods: the late 1980s and 2025. The game's campaign follows the story of David Mason, the son of the main character from the previous game, Alex Mason, as he tries to stop a villain named Raul Menendez from starting a Second Cold War and destroying the world.", image: '../imgs/codbo2.png' }
  ];
  
  useEffect(() => {
    const cachedGames = localStorage.getItem('games');
    const cachedVersion = localStorage.getItem('cacheVersion');

    if (cachedGames && cachedVersion=== CACHE_VERSION) {
      setGames(JSON.parse(cachedGames));
      setLoading(false);
    } else {
    const loadGames = async () => {
      try {
        const gamesData = await fetchGames();
        setGames(gamesData);
        localStorage.setItem('games', JSON.stringify(gamesData));
        localStorage.setItem('cacheVersion', CACHE_VERSION);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadGames();
    }
  }, []);

  useEffect(() => {
    const cachedGames = localStorage.getItem('games');
    const cachedVersion = localStorage.getItem('cacheVersion');

    if (cachedGames && cachedVersion=== CACHE_VERSION) {
      setGames(JSON.parse(cachedGames));
      setLoading(false);
    } else {
    const loadGames = async () => {
      try {
        const gamesData = await fetchGames();
        setGames(gamesData);
        localStorage.setItem('games', JSON.stringify(gamesData));
        localStorage.setItem('cacheVersion', CACHE_VERSION);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadGames();
    }
  }, []);

  const handleCardClick = (game) => {
    setPopupVisible(true);
    setSelectedGame(game);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    setSelectedGame(null);
  };

  return (
    <div>
      <Header />
      <main className="library-container">
        <h1 className="library-title">My Library</h1>
        <h2 className="game-status">Owned</h2>
        <div className="gameList">
          <ul>
            {games1.map(game => (
              <li key={game.id}>
                <Card game={game} onClick={() => handleCardClick(game)} />
              </li>
            ))}
          </ul>
        </div>
        <h2 className="game-status">Wishlist</h2>
        <div className="gameList">
          <ul>
            {games.map(game => (
              <li key={game.id}>
                <Card game={game} onClick={() => handleCardClick(game)} />
              </li>
            ))}
          </ul>
          {isPopupVisible && (
            <Popup
              game={selectedGame}
              onClose={handleClosePopup}
              isVisible={isPopupVisible}
            />
          )}
        </div>
      </main>
      <Footer />
      <div className={`popup-background ${isPopupVisible ? 'visible' : ''}`}></div>
    </div>
  );
};

export default Library;
