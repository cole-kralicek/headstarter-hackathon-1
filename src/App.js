import React, {useState} from 'react';
import Popup from './components/PopUp';
import './App.css'

const App = ()=> {
  const [selectedGame, setSelectedGame] = useState(null);
  const gameExample = [{ id: 1, name: 'The Name of the Game', year: '2024', activePlayers: '5000', description: 'Game description here' },];

  return (
    <div>
      <main>
        <div className="myLib">
          <h1>My Library</h1>
          
          <ul>
            {games.map((game) => (
              <li key={game.id} onClick={() => handleGameClick(game)}>
                {game.name}
              </li>
            ))}
        </ul>
        </div>
      </main>


    </div>
  );
}

export default App;
