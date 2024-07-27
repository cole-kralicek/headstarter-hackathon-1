import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import './stylesheets/header';


function Header() {
    return (
        <header class="header">
            <img></img>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="Library">Library</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;