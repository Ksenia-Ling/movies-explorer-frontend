import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({ movie }) {
    const { pathname } = useLocation();
    const [isLiked] = useState(false);

    function getMovieDuration(mins) {
        return `${Math.floor(mins / 60)}ч ${mins % 60}м`;
    }

    function handleLikeClick() {



    }

    function handleRemoveClick() {

    }

    return (
        <li className='movies-card'>
            <img className='movies-card__cover'
                src={movie.image}
                alt={movie.nameRU}
            />
            <div className='movies-card__container'>
                <h2 className='movies-card__title'>{movie.nameRU}</h2>
            {pathname === "/movies" ? (
                <button
                    className={`movies__button movies__like-button ${isLiked && "movies__like-button_active"
                        }`}
                    type='button'
                    onClick={handleLikeClick}>
                </button>
            ) : (
                <button
                    className='movies__button movie__remove-button'
                    type='button'
                    onClick={handleRemoveClick}>
                </button>
            )}
            </div>
            <p className='movies-card__duration'>{getMovieDuration(movie.duration)}</p>
        </li>
    );
}

export default MoviesCard;