import React from 'react';
import './Techs.css';

function Techs() {
    return (
        <section className='techs'>
            <h2 className='techs__heading'>
                Технологии
            </h2>
            <h3 className='techs__title'>
                7 технологий
            </h3>
            <p className='techs__text'>
                На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
            </p>
            <ul className='techs__list'>
                <li className='techs__list-item'>
                    <p className='techs__list-item__value'>
                        HTML
                    </p>
                </li>
                <li className='techs__list-item'>
                    <p className='techs__list-item__value'>
                        CSS
                    </p>
                </li>
                <li className='techs__list-item'>
                    <p className='techs__list-item__value'>
                        JS
                    </p>
                </li>
                <li className='techs__list-item'>
                    <p className='techs__list-item__value'>
                        React
                    </p>
                </li>
                <li className='techs__list-item'>
                    <p className='techs__list-item__value'>
                        Git
                    </p>
                </li>
                <li className='techs__list-item'>
                    <p className='techs__list-item__value'>
                        Express.js
                    </p>
                </li>
                <li className='techs__list-item'>
                    <p className='techs__list-item__value'>
                        MongoDB
                    </p>
                </li>
            </ul>
        </section>
    );
}

export default Techs;