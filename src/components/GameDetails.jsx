import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './stylesheets/GameDetails.css';
import { fetchGameById } from '../apiService';

const GameDetails = () => {
  const [game, setGame] = useState(null);
  const [error_s, setError_s] = useState('');
  const { id } = useParams();

  useEffect(() => {
    // Simulate an API call
    const loadGame = async () => {
      try {
        const gameData = await fetchGameById(id);
        setGame(gameData);
      } catch (error) {
        setError_s(error.message);
      }
    };

    loadGame();
  }, [id]);


  if (error_s) {
    return <div>{error_s}</div>
  } else if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <div className="game-page-wrapper">
      <h1>{game.name}</h1>
      <div className="game-page">
        <img src={game.image} alt={game.name} className='game-page-image' />
        <div className="game-text">
          <p><strong>Description:</strong> {game.description}</p>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
