import React from 'react';
import './stylesheets/Footer.css'; 

const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className="content-wrap">
            <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Backseat. All rights reserved.</p>
                <ul className="footer-links">
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            </footer>
        </div>
    </div>
  );
};

export default Footer;
