import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import './MoviesCardList.css';

function MoviesCardList({ initialMovies }) {
    return (
        <section className='movies-container'>
            <ul className='movies-container__list'>
                {initialMovies.map((movie) => (
                    <MoviesCard movie={movie} id={movie._id} />)
                )}
            </ul>
            <div className='movies-container__more'>
                <button className='movies-container__more-button'
                    type='button'>
                    Ещё
                </button>
            </div>
        </section>
    );
}

export default MoviesCardList;