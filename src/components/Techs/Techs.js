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
                    <p className='techs__list-value'>
                        HTML
                    </p>
                </li>
                <li className='techs__list-item'>
                    <p className='techs__list-value'>
                        CSS
                    </p>
                </li>
                <li className='techs__list-item'>
                    <p className='techs__list-value'>
                        JS
                    </p>
                </li>
                <li className='techs__list-item'>
                    <p className='techs__list-value'>
                        React
                    </p>
                </li>
                <li className='techs__list-item'>
                    <p className='techs__list-value'>
                        Git
                    </p>
                </li>
                <li className='techs__list-item'>
                    <p className='techs__list-value'>
                        Express.js
                    </p>
                </li>
                <li className='techs__list-item'>
                    <p className='techs__list-value'>
                        MongoDB
                    </p>
                </li>
            </ul>
        </section>
    );
}

export default Techs;