import React from 'react';
import Search from './Search.js'
import './stylesheets/Header.css';


function Header() {
    return (
        <header class="header">
            <img></img>
            <nav>
                <ul>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/library'>Library</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
