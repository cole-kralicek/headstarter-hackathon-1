import React, { useState, useEffect } from 'react';
import './stylesheets/Search.css';
import { fetchGames } from '../apiService';

const Search = () => {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cachedGames = localStorage.getItem('games');
    if (cachedGames) {
      setGames(JSON.parse(cachedGames));
      setLoading(false);
    } else {
    const loadGames = async () => {
      try {
        const gamesData = await fetchGames();
        setGames(gamesData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadGames();
    }
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const mockData = [
    { id: 1, title: 'Game 1', description: 'Description of Game 1', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Game 2', description: 'Description of Game 2', imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Game 3', description: 'Description of Game 3', imageUrl: 'https://via.placeholder.com/150' },
    { id: 4, title: 'Game 4', description: 'Description of Game 4', imageUrl: 'https://via.placeholder.com/150' },
  ];
  console.log("hi")
  const filteredResults = games.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  ).slice(0, 4);

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search Games..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm && filteredResults.length > 0 && (
        <div className="results-container">
          {filteredResults.map(result => (
            <div key={result.id} className="result-card">
              <img src={result.image} alt={result.title} className="result-image" />
              <div className="result-details">
                
                <h3 className="result-title">{result.name}</h3>
                
                <p className="result-description">{result.description}</p>;
                
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
