import React from 'react';
import './stylesheets/Card.css'

const Card = ({ game, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <h2 className="card-title">{game.name}</h2>

      <img className="image" src={game.image} alt={game.name} />
    </div>
  );
};

export default Card;

