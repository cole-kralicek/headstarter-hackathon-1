import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Search from './Search.js'
import './stylesheets/Header.css';


function Header() {
    return (
        <header className="head">
            <div className="logo">
                <img src='/imgs/BackseatLogo.png' alt='BackseatLogo'></img>
                <a href='/'>Backseat</a>
            </div>
            {/* <Search /> */}
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