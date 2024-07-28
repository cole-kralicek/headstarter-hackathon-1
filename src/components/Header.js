import React from 'react';
import Search from './Search.js'
import './stylesheets/Header.css';


const Header = () => {
  return (
    <nav className="header">
      
        <div className="leftItems">
          <img src="/path-to-your-logo.png" alt="Logo" />
          <Search />
     
        </div>
        <div className="Right Items">
          <button className="homeButton">Home</button>
          <button className="libButton">Library</button>
        </div>
      
    </nav>
  );
}

export default Header;
