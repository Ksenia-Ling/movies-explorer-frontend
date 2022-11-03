import { React, useState } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


function Movies({ movies }) {

    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return (
        <main className='movies'>
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

export default Movies;