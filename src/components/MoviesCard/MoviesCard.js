import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
// import { initialMovies } from '../../utils/initialMovies';

function MoviesCard({ movie, initialMovies, likedMovies, onMovieLike, onMovieDelete }) {

    const { pathname } = useLocation();
    const currentUser = useContext(CurrentUserContext);

    function getMovieDuration(mins) {
        return `${Math.floor(mins / 60)}ч ${mins % 60}м`;
    }
    // const isOwn = movie.owner === currentUser._id;

    const isLiked = initialMovies.some((i) => i.movieId === movie.movieId);

    function handleLikeClick() {
        onMovieLike(movie)
    }

    function handleDeleteClick() {
        onMovieDelete(movie)
    }

    return (
        <li className='movies-card'>
            <a className='movies-card__trailer-link'
                href={movie.trailerLink}
                target='_blank'
                rel='noreferrer'>
                {pathname === "/movies" ? (
                    <img className='movies-card__cover'
                        src={`https://api.nomoreparties.co${movie.image.url}`}
                        alt={movie.nameRU}
                    />
                ) : (
                    <img className='movies-card__cover'
                        src={movie.image}
                        alt={movie.nameRU}
                    />
                )}
            </a>
            <div className='movies-card__container'>
                <h2 className='movies-card__title'>{movie.nameRU}</h2>
                {pathname === "/movies" ? (
                    <button
                        className={`movies__button movies__like-button ${isLiked && "movies__like-button_active"}`}
                        type='button'
                        onClick={handleLikeClick}>
                    </button>
                ) : (
                    <button
                        className='movies__button movie__remove-button'
                        type='button'
                        onClick={handleDeleteClick}>
                    </button>
                )}
            </div>
            <p className='movies-card__duration'>{getMovieDuration(movie.duration)}</p>
        </li>
    );
}

export default MoviesCard;