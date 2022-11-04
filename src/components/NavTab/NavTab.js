import React from "react";
import "./NavTab.css";
import { NavLink } from "react-router-dom";

function NavTab() {
    function openNav() {
        document.getElementsByClassName('nav-tab').style.width = '520px'
    }
    function closeNav() {
        document.getElementsByClassName('nav-tab').style.width = '0'
    }

    return (
        <nav className='nav-tab'>
            <button className="header__panel-btn" onClick={openNav}>

            </button>

            <button className="nav-tab__close-btn" onClick={closeNav}>

            </button>

            <div className='nav-tab__links'>
                <NavLink to='/'
                    className='nav-tab__link'
                    activeClassName='nav-tab__link_active'>
                    Главная
                </NavLink>

                <NavLink to='/movies'
                    className='nav-tab__link'
                    activeClassName='nav-tab__link_active'>
                    Фильмы
                </NavLink>

                <NavLink to='/saved-movies'
                    className='nav-tab__link'
                    activeClassName='nav-tab__link_active'>
                    Сохранённые фильмы
                </NavLink>
            </div>

            <div class="header__side-panel-btn">
                <label className="header__panel-label" for="side-nav-panel">
                    <div className="header__ side-open">Открыть</div>
                    <div className="side-b side-close">Закрыть</div>
                </label>
            </div>
        </nav>
    );
}

export default NavTab;