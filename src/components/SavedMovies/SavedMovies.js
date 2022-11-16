import { React, useState, useEffect } from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from '../Preloader/Preloader';
import { mainApi } from '../../utils/MainApi';

function SavedMovies({ savedMovies, isLoggedIn, onMovieLike, onMovieDelete }) {
    const [checkBox, setCheckBox] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [request, setRequest] = useState('');
    const [moviesToShow, setMoviesToShow] = useState([]);

    useEffect(() => {
        fetchMovies()
    }, []);

    useEffect(() => {
        setMoviesToShow(filterMovies());
    }, [savedMovies, checkBox]);

    function handleCheckboxToggle() {
        setCheckBox(!checkBox);
    }

    function handleChange(evt) {
        setRequest(evt.target.value);
    }

    function handleSearchCheck(evt) {
        evt.preventDefault();
        setIsLoading(true)
        if (request) {
            setMoviesToShow(filterMovies());
        }
        setIsLoading(false)
    }

    function filterMovies() {
        const filteredMovies = savedMovies.filter((movie) => {
            if (checkBox && movie.duration >= 40) {
                return false;
            }

            return movie.nameRU.toLowerCase().includes(request.toLowerCase())
                || movie.nameEN.toLowerCase().includes(request.toLowerCase());
        });

        return filteredMovies;
    }

    function fetchMovies() {
        if (JSON.parse(localStorage.getItem('savedMovies')) !== null) {
            setMoviesToShow(JSON.parse(localStorage.getItem('savedMovies')))
        } else {
            mainApi
                .getSavedMovies()
                .then((movies) => {
                    setIsLoading(true)
                    setMoviesToShow(movies);
                    localStorage.setItem('savedMovies', JSON.stringify(movies));
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() =>
                    setIsLoading(false)
                )
        }
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
                onSubmit={handleSearchCheck}
            />
             {isLoading &&
                <Preloader />}
            <MoviesCardList
                savedMovies={savedMovies}
                initialMovies={moviesToShow}
                onMovieLike={onMovieLike}
                onMovieDelete={onMovieDelete}
            />
            <Footer />
        </main>
    );
}

export default SavedMovies;