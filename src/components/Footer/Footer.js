import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <p className='footer__text'>
                Учебный проект Яндекс.Практикум х BeatFilm.
            </p>
            <p className='footer__copyright-year'>
                &copy; 2022
            </p>
            <ul className='footer__links'>
                <li className='footer__link-item'>
                    <a className='footer__link'
                        href='https://practicum.yandex.ru/'>
                        Яндекс.Практикум
                    </a>
                </li>
                <li className='footer__link-item'>
                    <a className='footer__link'
                        href='https://github.com/Ksenia-Ling'>
                        Github
                    </a>
                </li>
            </ul>
        </footer>
    )
};

export default Footer;