
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Library from './pages/Library';
import Game from './pages/Game';
import NoPage from './pages/NoPage';
import './App.css';

const App = () => {

  const IDs = [1, 2, 3, 4];

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {IDs.map(id => (
            <Route path={`/game/:id`} element={<Game/>}>Game {id}</Route>
          ))}
          {/* <Route path="/game/:id" element={<Game/>} /> */}
          <Route path="/library" element={<Library />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;




