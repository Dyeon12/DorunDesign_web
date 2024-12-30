// src/components/Header.jsx
import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <header className="header">
        <div className="logo">
            <img src="images/logo_s.png" alt="로고" />
        </div>
        <nav className="nav">
            <ul>
                <li><Link to="/">DORUN DESIGN</Link></li>
                <li><Link to="/portfolio">PORTFOLIO</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
            </ul>
        </nav>
        </header>
    );
};

export default Header;
