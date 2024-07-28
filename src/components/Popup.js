import React from 'react';
import './stylesheets/Popup.css';

const Popup = ({ game, onClose, isVisible }) => {
  if (!game) return null;
  return (
    <div className={`popup-overlay ${isVisible ? 'visible' : ''}`}>
      <div className="popup-top">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <div className="popup-header">
          <img src={game.image} alt={game.name} />
          <div className="popup-info">
            <h2>{game.name}</h2>
            <div className="popup-meta">
              {/* <p>{game.year}</p>
              <p>Active Players: {game.activePlayers}</p> */}
            </div>
            <p className="popup-description">{game.description}</p>
          </div>
        </div>
      </div>
      <div className="popup-details">
        <div className="popup-details-1">
          <div className="input-group">
            <label>Completion</label>
            <select className="response">
              <option value="Complete">Complete</option>
              <option value="In Progress">In Progress</option>
              <option value="Wishlist">Wishlist</option>
            </select>
          </div>
          <div className="input-group">
            <label>Rating</label>
            <input className="response" type="text" />
          </div>
        </div>
        <div className="popup-details-2">
          <div className="input-group">
            <label>Start Date</label>
            <input className="response" type="date" />
          </div>
          <div className="input-group">
            <label>Finish Date</label>
            <input className="response" type="date" />
          </div>
          <div className="input-group">
            <label>Total Replays</label>
            <input className="response" type="number" />
          </div>
        </div>
        <div className="popup-details-3">
          <div className="input-group">
            <label>Notes</label>
            <textarea className="response" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
