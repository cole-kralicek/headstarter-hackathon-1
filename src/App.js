
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Library from './pages/Library';
import NoPage from './pages/NoPage';
import './App.css';

const App = () => {
  const gameExample = [{ id: 1, name: 'The Name of the Game', year: '2024', activePlayers: '5000', description: 'Game description here' },];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;




