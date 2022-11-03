import React from 'react';
import { Switch, Route, NavLink, useLocation } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation.js';
import logo from '../../images/Header/logo.svg';

function Header({ isLoggedIn }) {
    // const { pathname } = useLocation();

    // const headerMain = {
    //     backgroundColor: "#073042",
    // }
    // const headerRest = {
    //     backgroundColor: "#20202",
    // }

    return (
        <header className="header">
            <div className='header__container'>
                <img
                    className="header__logo"
                    src={logo}
                    alt="лого 'Movie Explorer'" />
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
            </div>
        </header>
    );
}

export default Header;
