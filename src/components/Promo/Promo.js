import React from 'react';
import './Promo.css';
import promoPic from '../../images/Promo/promo-art.svg'

function Promo() {
    return (
        <header className='promo'>
            <div className='promo__container'>
                <h1 className='promo__heading'>
                    Учебный проект студента факультета Веб-разработки.
                </h1>
                <div className='promo__art-container'>
                    <img
                        className='promo__art'
                        src={promoPic}
                        alt='арт к промо-блоку страницы' />
                </div>
            </div>
        </header>
    );
}

export default Promo;
