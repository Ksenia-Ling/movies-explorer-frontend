import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Movies.css';

function MoviesCard({ movie }) {
    const { pathname } = useLocation();
    const [isLiked] = useState(false);

    function getMovieDuration(mins) {

    }

    function handleLikeClick() {

    }

    function handleRemoveClick() {

    }

    return (
        <li className='movies-card'>
            <img className='movies-card__cover'
                src={movie.cover}
                alt={movie.name}
            />
            <div className='movies-card__container'>
                <h2 className='movies-card__title'>{movie.rusName}</h2>
                <p className='movies-card__duration'>{getMovieDuration(movie.duration)}</p>
            </div>
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
        </li>
    );
}

export default MoviesCard;