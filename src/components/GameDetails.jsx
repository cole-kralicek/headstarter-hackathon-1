import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './stylesheets/GameDetails.css';
import { fetchGameById } from '../apiService';

const GameDetails = () => {
  const [game, setGame] = useState(null);
  const [error_s, setError_s] = useState('');
  const { id } = useParams();

  const games = [
    { id: 1, name: 'Elden Ring', year: '2024', activePlayers: '5000', description: "A fantasy action role-playing game (RPG) developed by FromSoftware and released in February 2022. The game is set in the Lands Between, a world created by Hidetaka Miyazaki and George R.R. Martin, where players control a customizable character on a quest to become the Elden Lord and repair the Elden Ring", image: '../imgs/elden-ring.webp' },
    { id: 2, name: 'Call of Duty: Black Ops 2', year: '2024', activePlayers: '4000', description: "A first-person shooter video game released in 2012 by Treyarch and Activision that takes place in two different time periods: the late 1980s and 2025. The game's campaign follows the story of David Mason, the son of the main character from the previous game, Alex Mason, as he tries to stop a villain named Raul Menendez from starting a Second Cold War and destroying the world.", image: '../imgs/codbo21.png' },
    { id: 3, name: 'Grand Theft Auto V', year: '2024', activePlayers: '5000', description: "An action-adventure game developed by Rockstar North and published by Rockstar Games. Released in 2013, it is set in the fictional state of San Andreas, which is heavily based on Southern California. The game features a sprawling open world that players can explore at their leisure. The story follows three protagonists—Michael De Santa, a retired bank robber; Franklin Clinton, a street hustler; and Trevor Philips, a violent psychopath—as they commit heists while under pressure from a corrupt government agency and powerful criminals.", image: '../imgs/gta5.jpg' },
    { id: 4, name: 'Counter Strike 2', year: '2024', activePlayers: '4000', description: "a first-person shooter game developed by Valve Corporation. As a successor to the iconic Counter-Strike: Global Offensive (CS), it retains the core mechanics that define the series: tactical gameplay, team-based objectives, and a focus on skill and precision. Players can choose to join either the terrorist or counter-terrorist teams, engaging in various modes such as bomb defusal and hostage rescue. CS2 is known for its competitive play, strategic depth, and a robust esports scene.", image: '../imgs/cs2.jpeg' }
  ];

  useEffect(() => {
    // Simulate an API call
    const loadGame = async () => {
      try {
        if (id === 1) {
          setGame(game[1])
        } else if (id === 2) {
          setGame(game[2])
        } else if (id === 3) {
          setGame(game[3]) 
        } else if (id === 4) {
          setGame(game[4])
        } else {
          const gameData = await fetchGameById(id)
          setGame(gameData);
        }    
    } catch (error) {
        setError_s(error.message)
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