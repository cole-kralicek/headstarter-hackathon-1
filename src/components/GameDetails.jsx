import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './stylesheets/GameDetails.css';
import { fetchGameById } from '../apiService';

const GameDetails = () => {
  const [game, setGame] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Simulate an API call
    const loadGame = async () => {
      const gameData = await fetchGameById();
      setGame(gameData);
    };
    
    loadGame();
  }, [id]);

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <div className="game-page-wrapper">
      <h1>{game.name}</h1>
      <div className="game-page">
        <img src='https://placehold.co/120x180' alt={game.name} className='game-page-image' />
        <div className="game-text">
          <p><strong>Year:</strong> {game.year}</p>
          <p><strong>Active Players:</strong> {game.activePlayers}</p>
          <p><strong>Description:</strong> {game.description}</p>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;