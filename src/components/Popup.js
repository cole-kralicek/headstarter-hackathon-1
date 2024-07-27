import React from 'react';
import './stylesheets/Popup.css'

const Popup = ({ game, onClose }) => {
    if (!game) return null;
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>X</button>
        <div className="game-header">
          <div className="game-image"></div>
          <div className="game-info">
            <h2>{game.name}</h2>
            <p>{game.year}</p>
            <p>Active Players: {game.activePlayers}</p>
            <p>{game.description}</p>
          </div>
        </div>
        <div className="game-details">
          <div className="input-group">
            <label>Completion</label>
            <select>

                <option value="fruit">Fruit</option>

                <option value="vegetable">Vegetable</option>

                <option value="meat">Meat</option>
     </select>
          </div>
          <div className="input-group">
            <label>Rating</label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label>Start Date</label>
            <input type="date" />
          </div>
          <div className="input-group">
            <label>Completion Date</label>
            <input type="date" />
          </div>
          <div className="input-group">
            <label>Total Replays</label>
            <input type="number" />
          </div>
          <div className="input-group">
            <label>Notes</label>
            <textarea />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;

