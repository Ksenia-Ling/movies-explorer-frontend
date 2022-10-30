import React from "react";
import './Main.css';
import Header from '../Header/Header.js';
import Promo from '../Promo/Promo.js';
import AboutProject from '../AboutProject/AboutProject.js';
import Techs from '../Techs/Techs.js';
import Profile from '../Profile/Profile.js';
import Portfolio from '../Portfolio/Portfolio.js';
import Footer from '../Footer/Footer.js';

function Main() {
    return (
        <main className='content'>
            <Header />
            <Promo />
            <AboutProject />
            <Techs />
            <Profile />
            <Portfolio />
            <Footer />
        </main>
    );
}

export default Main;