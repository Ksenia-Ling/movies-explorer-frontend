import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies({ movies }) {
    return (
        <main className='movies'>
            <Header />
            <SearchForm />
            <MoviesCardList
                initialMovies={movies} />
            <Footer />
        </main>
    );
}

export default Movies;