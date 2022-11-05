import React from 'react';
import { Switch, Route, NavLink, useLocation, Link } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation.js';
import logo from '../../images/Header/logo.svg';
// import NavTab from '../NavTab/NavTab';

function Header({ isLoggedIn }) {
    const { pathname } = useLocation();
    // const [isOpen, setIsOpen] = useState(false);

    // function handleMenuClick() {
    //     setIsOpen(!isOpen);
    // }

    return (
        <header className={pathname === '/' ? 'header' : 'header header_color_dark'}>
            <div className='header__container'>
                <Link to='/'
                    className="header__home-link">
                    <img
                        className="header__logo"
                        src={logo}
                        alt="лого 'Movie Explorer'" />
                </Link>
                <button className="header__menu" 
                // onClick={handleMenuClick}/
                />
                {!isLoggedIn ?
                    <Switch>
                        <Route path="/">
                            <nav className={`header__navigation ${!isLoggedIn && "header__auth"}`}>
                                <NavLink to="/signup" className="header__link header__link_type_auth">
                                    Регистрация
                                </NavLink>
                                <NavLink to="/signin" className="header__link header__link_type_login">
                                    Войти
                                </NavLink>
                            </nav>
                        </Route>
                    </Switch>
                    :
                    <Navigation />
                }
                {/* <NavTab /> */}
            </div>
        </header>
    );
}

export default Header;
