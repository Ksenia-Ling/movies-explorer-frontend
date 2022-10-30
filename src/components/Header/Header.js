import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation.js';
// Импортировать logo

function Header() {
    return (
        <header className="header">
            <img
                className="header__logo"
                src={logo}
                alt="лого 'Movie Explorer'" />
                <Navigation />
        </header>
    );
}

export default Header;
