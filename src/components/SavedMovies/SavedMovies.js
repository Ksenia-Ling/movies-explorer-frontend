import { React, useState, useEffect } from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { mainApi } from '../../utils/MainApi';

function SavedMovies({ savedMovies, isLoggedIn, onMovieLike, onMovieDelete }) {
    const [checkBox, setCheckBox] = useState(false);
    // const [isSearchValid, setIsSearchValid] = useState(true);
    // const [savedMovies, setSavedMovies] = useState([])
    const [request, setRequest] = useState('');

    // useEffect(() => {
    //     mainApi
    //         .getSavedMovies()
    //         .then((movies) => {
    //             setSavedMovies(movies);
                
    //         })
    //         .catch(console.log)
    // }, [])

    function handleCheckboxToggle() {
        setCheckBox(!checkBox);
    }

    function handleChange(evt) {
        setRequest(evt.target.value);
    }

    function handleSavedMovies(request) {
        const filteredMoviesArr = savedMovies.filter((movie) => {
            return movie.nameRU.toLowerCase().includes(request.toLowerCase())
        });
        const shortMovies = filteredMoviesArr.filter(({ duration }) => duration <= 40);
        // const searchResult = checkBox ? filteredMoviesArr.filter(({ duration }) => duration <= 40) : filteredMoviesArr;

        // if (checkBox) {
        //     setSavedMovies(shortMovies)
        // } else if (filteredMoviesArr.length !== 0) {
        //     setSavedMovies(filteredMoviesArr)
        // } else {
        //     setSavedMovies([])
        // }
        // return;
    }

    return (
        <main className='saved-movies'>
            <Header
                isLoggedIn={isLoggedIn}
            />
            <SearchForm
                checkBox={checkBox}
                request={request}
                setRequest={setRequest}
                onCheckBoxToggle={handleCheckboxToggle}
                onChange={handleChange}
                onSubmit={handleSavedMovies}
            />
            <MoviesCardList
                savedMovies={savedMovies}
                initialMovies={savedMovies}
                onMovieLike={onMovieLike}
                onMovieDelete={onMovieDelete}
            />
            <Footer />
        </main>
    );
}

export default SavedMovies;