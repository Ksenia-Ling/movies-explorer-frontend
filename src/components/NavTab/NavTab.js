import React from "react";
import { useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

import "./NavTab.css";
import accountIco from '../../images/Header/account.svg';

function NavTab({ isOpen, handleMenuClose }) {
    const currentLocation = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [currentLocation]);

    return (
        <div className={`nav-tab ${isOpen && 'nav-tab_active'}`}>
            <button className="nav-tab__close-btn" onClick={handleMenuClose}/>

            <nav className='nav-tab__bar'>
                <ul className='nav-tab__list'>
                    <li className='nav-tab__list-item'>
                        <NavLink exact to='/'
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-tab__link_active nav-tab__link"
                                    : "nav-tab__link"
                            }
                            activeClassName='nav-tab__link_active'>
                            Главная
                        </NavLink>
                    </li>

                    <li className='nav-tab__list-item'>
                        <NavLink exact to='/movies'
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-tab__link_active nav-tab__link"
                                    : "nav-tab__link"
                            }
                            activeClassName='nav-tab__link_active'>
                            Фильмы
                        </NavLink>
                    </li>

                    <li className='nav-tab__list-item'>
                        <NavLink exact to='/saved-movies'
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-tab__link_active nav-tab__link"
                                    : "nav-tab__link"
                            }
                            activeClassName='nav-tab__link_active'>
                            Сохранённые фильмы
                        </NavLink>
                    </li>
                </ul>

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