import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Search from './Search.js'
import './stylesheets/Header.css';


function Header() {
    return (
        <header className="head">
            {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" /> */}
            <div className="logo">
                <a href='/'>Backseat</a>
            </div>
            <Search />
            <nav className='navbar'>
                <ul className='navbar-items'>
                    <li>
                        <a href='/library'>Library</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;