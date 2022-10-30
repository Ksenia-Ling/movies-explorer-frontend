import React from 'react';
import './AboutProject.css';

function AboutProject() {
    return (
        <section className='project'>
            <h2 className='project__heading'>
                О проекте
            </h2>
            <ul className='project__info'>
                <li className='project__info__description'>
                    <h3 className='project__info__description-title'>
                        Дипломный проект включал 5 этапов
                    </h3>
                    <p className='project__info__description-text'>
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                    </p>
                </li>
                <li className='project__info__description'>
                    <h3 className='project__info__description-title'>
                        На выполнение диплома ушло 5 недель
                    </h3>
                    <p className='project__info__description-text'>
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </li>
            </ul>
            <div className='project__time-bar'>
                <p className='project__time-bar__length'>1 неделя</p>
                <p className='project__time-bar__subtitle'>Back-end</p>
                <p className='project__time-bar__length'>4 недели</p>
                <p className='project__time-bar__subtitle'>Front-end</p>
            </div>
        </section>
    );
}

export default AboutProject;