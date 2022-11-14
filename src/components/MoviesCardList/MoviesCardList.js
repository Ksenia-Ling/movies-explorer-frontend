import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import './MoviesCardList.css';

function MoviesCardList({ isCompleted, onShowMore, initialMovies, savedMovies, onMovieLike, onMovieDelete }) {
    const { pathname } = useLocation();

    return (
        <section className='movies-container'>
            <div className='movies__grid'>
                <ul className='movies-container__list'>
                    {initialMovies.map((movie) => (
                        <MoviesCard
                            savedMovies={savedMovies}
                            movie={movie}
                            initialMovies={initialMovies}
                            onMovieLike={onMovieLike}
                            onMovieDelete={onMovieDelete}
                        />)
                    )}
                </ul>
            </div>
            {pathname === '/movies' ? (
                <div className='movies-container__more'>
                    <button className={!isCompleted ? 'movies-container__more-button' : 'movies-container__more-button_disabled'}
                        type='button'
                        onClick={onShowMore}>
                        Ещё
                    </button>
                </div>) : ('')
            }
        </section>
    );
}

export default MoviesCardList;