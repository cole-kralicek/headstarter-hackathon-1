import React from 'react';
import './stylesheets/Popup.css'

const Popup = ({ game, onClose }) => {

  const game2 = [
    {
      type: 'game',
      name: 'Portal',
      detailed_description: '<p>Portal&trade; is a new single player game from Valve. Set in the mysterious Aperture Science Laboratories, Portal has been called one of the most innovative new games on the horizon and will offer gamers hours of unique gameplay.</p>\r\n' +
        "\t\t\t\t\t<p>The game is designed to change the way players approach, manipulate, and surmise the possibilities in a given environment; similar to how Half-Life&reg; 2's Gravity Gun innovated new ways to leverage an object in any given situation.</p>\r\n" +
        '\t\t\t\t\t<p>Players must solve physical puzzles and challenges by opening portals to maneuvering objects, and themselves, through space.</p>\r\n' +
        '\t\t\t\t\t',
      about_the_game: '<p>Portal&trade; is a new single player game from Valve. Set in the mysterious Aperture Science Laboratories, Portal has been called one of the most innovative new games on the horizon and will offer gamers hours of unique gameplay.</p>\r\n' +
        "\t\t\t\t\t<p>The game is designed to change the way players approach, manipulate, and surmise the possibilities in a given environment; similar to how Half-Life&reg; 2's Gravity Gun innovated new ways to leverage an object in any given situation.</p>\r\n" +
        '\t\t\t\t\t<p>Players must solve physical puzzles and challenges by opening portals to maneuvering objects, and themselves, through space.</p>\r\n' +
        '\t\t\t\t\t',
      short_description: 'Portal&trade; is a new single player game from Valve. Set in the mysterious Aperture Science Laboratories, Portal has been called one of the most innovative new games on the horizon and will offer gamers hours of unique gameplay.',
      image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/400/header.jpg?t=1721932680',
    }
  ]

  if (!game) return null;
  return (
    // <div className='popup-background'>
    <div className={`popup-overlay ${game ? 'visible' : ''}`}>
      <div className="popup-top">
        <button className="close-button" onClick={onClose}>X</button>
        <div className="popup-header">
          {/* <div className='popup-image-container'> */}
          <img src={game.image} alt={game.name} />
          {/* </div> */}
          <div className="popup-info">
            <h2>{game.name}</h2>
            <div className="popup-meta">
              {/* <p>{game.year}</p>
              <p>Active Players: {game.activePlayers}</p> */}
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
            <label>Finish Date</label>
            <input className='response' type="date" />
          </div>
          <div className="input-group">
            <label>Total Replays</label>
            <input className='response' type="number" />
          </div>
        </div>
        <div className='popup-details-3'>
          <div className="input-group">
            <label>Notes</label>
            <textarea className='response' />
          </div>
        </div>
      </div >
    </div >
  );
};

export default Popup;

