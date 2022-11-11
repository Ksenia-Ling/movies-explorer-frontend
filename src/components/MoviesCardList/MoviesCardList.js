import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import './MoviesCardList.css';

function MoviesCardList({ initialMovies }) {
    const { pathname } = useLocation();

    return (
        <section className='movies-container'>
            <div className='movies__grid'>
                <ul className='movies-container__list'>
                    {initialMovies.map((movie) => (
                        <MoviesCard movie={movie} id={movie._id} />)
                    )}
                </ul>
            </div>
            {pathname === '/movies' ? (
                <div className='movies-container__more'>
                    <button className='movies-container__more-button'
                        type='button'>
                        Ещё
                    </button>
                </div>) : ('')
            }
        </section>
    );
}

export default MoviesCardList;