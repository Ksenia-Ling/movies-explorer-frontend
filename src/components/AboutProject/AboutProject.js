import React from 'react';
import './AboutProject.css';

function AboutProject() {
    return (
        <section className='project'>
            <h2 className='project__heading'>
                О проекте
            </h2>
            <ul className='project__info'>
                <li className='project__description'>
                    <h3 className='project__description-title'>
                        Дипломный проект включал 5 этапов
                    </h3>
                    <p className='project__description-text'>
                        Составление плана, работу над бэкендом, вёрстку, добавление <br/> функциональности и финальные доработки.
                    </p>
                </li>
                <li className='project__description'>
                    <h3 className='project__description-title'>
                        На выполнение диплома ушло 5 недель
                    </h3>
                    <p className='project__description-text'>
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было <br/> соблюдать, чтобы успешно защититься.
                    </p>
                </li>
            </ul>
            <div className='project__time-bar'>
                <p className='project__length project__length_type_back'>1 неделя</p>
                <p className='project__length project__length_type_front'>4 недели</p>
                <p className='project__bar-subtitle'>Back-end</p>
                <p className='project__bar-subtitle'>Front-end</p>
            </div>
        </section>
    );
}

export default AboutProject;