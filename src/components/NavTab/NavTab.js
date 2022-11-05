import React from "react";
import "./NavTab.css";
import { NavLink, Link } from "react-router-dom";

import accountIco from '../../images/Header/account.svg';


function NavTab({ isOpen }) {

    return (
        <div className={`nav-tab' ${isOpen && 'nav-tab_active'}`}>
            <nav className='nav-tab__bar'>
            <button className="nav-tab__close-btn" />
                <NavLink exact to='/'
                    className='nav-tab__link'
                    activeClassName='nav-tab__link_active'>
                    Главная
                </NavLink>

                <NavLink exact to='/movies'
                    className='nav-tab__link'
                    activeClassName='nav-tab__link_active'>
                    Фильмы
                </NavLink>

                <NavLink exact to='/saved-movies'
                    className='nav-tab__link'
                    activeClassName='nav-tab__link_active'>
                    Сохранённые фильмы
                </NavLink>
                <Link to='/profile' className='nav-tab__profile-link'>
                <img
                    className='nav-tab__account'
                    src={accountIco}
                    alt='кнопка входа в аккаунт'
                />
            </Link>
            </nav>
        </div>
    );
}


export default NavTab;