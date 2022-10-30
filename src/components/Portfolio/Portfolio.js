import React from 'react';
import './Portfloio.css';
// Импортировать arrowIco

function Portfolio() {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__heading'>
                Портфолио
            </h2>
            <ul className='portfolio__project-list'>
                <li className='portfolio__project-list__item'>
                    <a className='portfolio__link'
                        target={'_blank'}
                        href='https://github.com/Ksenia-Ling/how-to-learn'
                        rel="noreferrer">
                        <p className='portfolio__link-text'>
                            Статичный сайт
                        </p>
                        <img className='portfolio__link-icon'
                            alt='иконка со ссылкой на Статичный сайт'
                            src={arrowIco}
                        />
                    </a>
                </li>
                <li className='portfolio__project-list__item'>
                    <a className='portfolio__link'
                        target={'_blank'}
                        href='https://github.com/Ksenia-Ling/russian-travel'
                        rel="noreferrer">
                        <p className='portfolio__link-text'>
                            Адаптивный сайт
                        </p>
                        <img className='portfolio__link-icon'
                            alt='иконка со ссылкой на Адаптивный сайт'
                            src={arrowIco}
                        />
                    </a>
                </li>
                <li className='portfolio__project-list__item'>
                    <a className='portfolio__link'
                        target={'_blank'}
                        href='https://github.com/Ksenia-Ling/react-mesto-api-full'
                        rel="noreferrer">
                        <p className='portfolio__link-text'>
                            Одностраничное приложение
                        </p>
                        <img className='portfolio__link-icon'
                            alt='иконка со ссылкой на Одностраничное приложение'
                            src={arrowIco}
                        />
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;