import React from 'react';
import './Promo.css';
// Импортировать PromoPic

function Promo() {
    return (
        <header className='promo'>
            <h1 className='promo__heading'>
                Учебный проект студента факультета Веб-разработки.
            </h1>
            <img
                className='promo__art'
                src={promoPic}
                alt='арт к промо-блоку страницы' />
        </header>
    );
}

export default Promo;
