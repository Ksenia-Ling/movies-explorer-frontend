import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({ movie, savedMovies, onMovieLike, onMovieDelete }) {

    const { pathname } = useLocation();

    function getMovieDuration(mins) {
        return `${Math.floor(mins / 60)}ч ${mins % 60}м`;
    }

    const isSaved = savedMovies.some((i) => i.movieId === movie.id);

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
                        className={`movies__button movies__like-button ${isSaved && "movies__like-button_active"}`}
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