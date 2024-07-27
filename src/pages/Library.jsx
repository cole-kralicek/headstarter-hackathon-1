import React, {useState} from 'react';
import Card from '../components/Card.js'
import Popup from '../components/Popup.js'
import '../App.css'

const Library = ()=> {
const [selectedGame, setSelectedGame] = useState(null);
const [isPopupVisible, setPopupVisible] = useState(false);

const games = [
    { id: 1, name: 'Elden Ring', year: '2024', activePlayers: '5000', description: 'Game description here', image: '../imgs/elden-ring.webp' },
    { id: 2, name: 'COD', year: '2024', activePlayers: '5000', description: 'Game description here', image: '../imgs/elden-ring.webp' }
];


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
      <main>
      <h1>My Library</h1>
        <h2>Owned</h2>
        <div className="gameList">
          <ul>
          {games.map(game => (
              <li key={game.id}>
                <Card game={game} onClick={() => handleCardClick(game)}/>
              </li>
            ))}
        </ul>
        </div>
        <h2>Wishlist</h2>
        <div className='gameList'>
        <ul>
          {games.map(game => (
              <li key={game.id}>
                <Card game={game} onClick={() => handleCardClick(game)}/>
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


    </div>
  );
}

export default Library;
