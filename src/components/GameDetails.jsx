import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const GameDetails = () => {
  const [game, setGame] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Simulate an API call
    const fetchGame = async () => {
      // Simulating API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Mock data
      const gameData = {
        id: id,
        name: `Game ${id}`,
        year: `2024`,
        activePlayers: `1000`,
        description: `This is the description for Game ${id}`,
        image: `../imgs/game${id}.webp`
      };
      
      setGame(gameData);
    };

    fetchGame();
  }, [id]);

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <div className="game-page">
      <h1>{game.name}</h1>
      <img src={game.image} alt={game.name} />
      <p><strong>Year:</strong> {game.year}</p>
      <p><strong>Active Players:</strong> {game.activePlayers}</p>
      <p><strong>Description:</strong> {game.description}</p>
    </div>
  );
};

export default GameDetails;