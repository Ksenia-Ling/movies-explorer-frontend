import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import './MoviesCard.css';

function MoviesCardList({ initialMovies }) {
    return (
        <section className='movies-container'>
            <ul className='movies-container__list'>
                {initialMovies.map((movie) => (
                    <MoviesCard movie={movie} id={movie._id} />)
                )}
            </ul>
            <button className='movies-container__more-button'
                type='button'>
                Ещё
            </button>
        </section>
    );
}

export default MoviesCardList;