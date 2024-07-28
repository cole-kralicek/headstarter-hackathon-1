import React, { useState,useEffect } from 'react';
import Card from '../components/Card.js'
import Popup from '../components/Popup.js'
import Header from '../components/Header.js';
import Footer from '../components/Footer.jsx';
import { fetchGames } from '../apiService';


const Library = () => {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const CACHE_VERSION = '1.1';

  const games1 = [
    { id: 1, name: 'Elden Ring', year: '2024', activePlayers: '5000', description: 'Game description here', image: '../imgs/elden-ring.webp' },
    { id: 2, name: 'COD', year: '2024', activePlayers: '5000', description: 'Game description here', image: '../imgs/elden-ring.webp' }
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
      <main className='library-container'>
        <h1 className='library-title'>My Library</h1>
        <h2 className='game-status'>Owned</h2>
        <div className="gameList">
          <ul>
            {games1.map(game => (
              <li key={game.id}>
                <Card game={game} onClick={() => handleCardClick(game)} />
              </li>
            ))}
          </ul>
        </div>
        <h2 className='game-status'>Wishlist</h2>
        <div className='gameList'>
          <ul>
            {games.map(game => (
              <li key={game.id}>
                <Card game={game} onClick={() => handleCardClick(game)} />
              </li>
            ))}
            {isPopupVisible && (
              <Popup
                game={selectedGame}
                onClose={handleClosePopup}
              />
            )}
          </ul>
        </div>
      </main>
      <Footer />
      {/* <div className={`overlay ${isPopupVisible ? 'visible' : ''}`}></div> */}
    </div>
  );
}

export default Library;
