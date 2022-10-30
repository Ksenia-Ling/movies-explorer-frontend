import React from "react";
import './SavedMovies.css';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies({ movies }) {
    return (
        <main className='saved-movies'>
            <Header />
            <SearchForm />
            <MoviesCardList
                initialMovies={movies} />
            <Footer />
        </main>
    );
}

export default SavedMovies;