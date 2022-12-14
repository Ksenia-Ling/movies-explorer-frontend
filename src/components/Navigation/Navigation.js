import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import accountBtn from '../../images/Header/account.svg';

function Navigation() {
    return (
        <nav className='navigation'>
            <div className='navigation__links'>
                <NavLink to='/movies'
                    className='navigation__link'
                    activeClassName='navigation__link_active'>
                    Фильмы
                </NavLink>
                <NavLink to='/saved-movies'
                    className='navigation__link'
                    activeClassName='navigation__link_active'>
                    Сохранённые фильмы
                </NavLink>
            </div>
            <NavLink to='/profile'>
                <img
                    className="navigation__account-btn"
                    src={accountBtn}
                    alt="Кнопка входа в аккаунт" />
            </NavLink>
        </nav>
    );
}

export default Navigation;