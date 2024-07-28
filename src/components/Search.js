import React, { useState } from 'react';
import './stylesheets/Search.css'; // Import CSS file for styling

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const mockData = [
    { id: 1, title: 'Game 1', description: 'Description of Game 1', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Game 2', description: 'Description of Game 2', imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Game 3', description: 'Description of Game 3', imageUrl: 'https://via.placeholder.com/150' },
    { id: 4, title: 'Game 4', description: 'Description of Game 4', imageUrl: 'https://via.placeholder.com/150' },
  ];

  const filteredResults = mockData.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
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
              <img src={result.imageUrl} alt={result.title} className="result-image" />
              <div className="result-details">
                <h3 className="result-title">{result.title}</h3>
                <p className="result-description">{result.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
