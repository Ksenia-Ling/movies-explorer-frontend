import React from 'react';
import './AboutMe.css';
// Импортировать фотку authorImg

function AboutMe() {
    return (
        <section className='about-me'>
            <h2 className='about-me__heading'>
                Студент
            </h2>
            <h3 className='about-me__title'>
                Ксения
            </h3>
            <p className='about-me__subtitle'>
                Фронтенд-разработчик, 31 год
            </p>
            <p className='about-me__text'>
                Я родилась и живу в Санкт-Петербурге. Люблю тяжёлую(и не очень) музыку, животных и горные пейзажи. В свободное время раскрашиваю миниатюры из настольных игр.
                Работала в стоматологических клиниках администратором, побывала и на должности управляющей, но мне всегда было интересно попробовать
                себя в роли it-специалиста. Благодаря Практикуму, я получила навыки web-разработки, которые планирую применять в моей будущей работе.
                Верю, что никогда не поздно начать менять свою жизнь и идти к мечте.
            </p>
            <a
                className='about-me__link'
                href='https://github.com/Ksenia-Ling'>
                Github
            </a>
            <img className='about-me__image'
                src={authorImg}
                alt='фото автора работы' />
        </section>
    );
}

export default AboutMe;