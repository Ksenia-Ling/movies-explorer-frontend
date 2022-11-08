import { React, useState } from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies({ isLoggedIn, movies }) {

    return (
        <main className='saved-movies'>
            <Header
                isLoggedIn={isLoggedIn}
            />
            <SearchForm />
            <MoviesCardList
                initialMovies={movies} />
            <Footer />
        </main>
    );
}

export default SavedMovies;