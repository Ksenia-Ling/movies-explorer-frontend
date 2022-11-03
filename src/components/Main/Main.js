import React from "react";
import './Main.css';
import Promo from '../Promo/Promo.js';
import AboutProject from '../AboutProject/AboutProject.js';
import Techs from '../Techs/Techs.js';
import AboutMe from "../AboutMe/AboutMe";
import Footer from '../Footer/Footer.js';

function Main() {
    return (
        <main className='content'>
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Footer />
        </main>
    );
}

export default Main;