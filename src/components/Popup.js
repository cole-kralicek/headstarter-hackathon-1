import React from 'react';
import './stylesheets/Popup.css'

const Popup = ({ game, onClose }) => {
  if (!game) return null;
  return (
    <div className="popup-overlay">
      <div className="popup-top">
        <button className="close-button" onClick={onClose}>X</button>
        <div className="popup-header">
          {/* <div className='popup-image-container'> */}
          <img src={game.image} alt={game.name} />
          {/* </div> */}
          <div className="popup-info">
            <h2>{game.name}</h2>
            <div className="popup-meta">
              <p>{game.year}</p>
              <p>Active Players: {game.activePlayers}</p>
            </div>
            {/* <div className='popup-meta-description'> */}
            <p className="popup-description">{game.description}</p>
            {/* </div> */}

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
            <input className='response' type="date" />
          </div>
          <div className="input-group">
            <label>Completion Date</label>
            <input className='response' type="date" />
          </div>
          <div className="input-group">
            <label>Total Replays</label>
            <input className='response' type="number" />
          </div>
        </div>
        <div className="input-group">
          <label>Notes</label>
          <textarea className='response' />
        </div>
      </div>
    </div >
  );
};

export default Popup;

