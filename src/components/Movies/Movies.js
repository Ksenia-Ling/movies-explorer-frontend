import { React, useState, useEffect } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import { moviesApi } from '../../utils/MoviesApi';


function Movies({ savedMovies, isLoggedIn, onMovieLike, onMovieDelete }) {

    const [checkBox, setCheckBox] = useState(false);
    const [request, setRequest] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // стейты для поиска и отображения фильмов
    const [movies, setMovies] = useState([]);
    const [startMoviesValue, setStartMoviesValue] = useState(0);
    const [moviesPerPage, setMoviesPerPage] = useState(3);
    const [moviesToShow, setMoviesToShow] = useState([]);
    const [moreMovies, setMoreMovies] = useState(0);

    // закончился ли массив с фильмами
    const [isCompleted, setIsCompleted] = useState(true);

    useEffect(() => {
        setCheckBox(JSON.parse(localStorage.getItem('checkBox') || false));
        setRequest(localStorage.getItem('request') || '');
        fetchMovies();
    }, []);

    useEffect(() => {
        if (request !== '') {
            handleSliceMovies(filterMovies(), 0, startMoviesValue);
        };
        handleResize();
    }, [movies, checkBox]);


    window.addEventListener('resize', handleResize);

    function handleResize() {
        if (document.documentElement.clientWidth <= 480) {
            setMoviesPerPage(2)
            setStartMoviesValue(5)
        } else if (document.documentElement.clientWidth <= 768) {
            setMoviesPerPage(2)
            setStartMoviesValue(8)
        } else {
            setMoviesPerPage(3)
            setStartMoviesValue(12)
        }
    }

    function handleChange(evt) {
        setRequest(evt.target.value);
    }

    function handleCheckboxToggle() {
        setCheckBox(!checkBox);
        localStorage.setItem('checkBox', !checkBox);
    }

    // проверка на введённое значение перед поиском фильма
    function handleSearchCheck(evt) {
        evt.preventDefault();
            localStorage.setItem('checkBox', !checkBox);
        if (request) {
            localStorage.setItem('request', request);
            handleSliceMovies(filterMovies(), 0, startMoviesValue);
        }
    }

    function filterMovies() {
        const filteredMovies = movies.filter((movie) => {
            if (checkBox && movie.duration >= 40) {
                return false;
            }

            return movie.nameRU.toLowerCase().includes(request.toLowerCase())
                || movie.nameEN.toLowerCase().includes(request.toLowerCase());
        });

        return filteredMovies;
    }

    // часть, которую показываем при нажатии на кнопку поиска
    function handleSliceMovies(movies, start, end) {
        const slicedMovies = movies.slice(start, end);
        setMoviesToShow(slicedMovies);
        setMoreMovies(Number(start + end))
        movies.length > slicedMovies.length ? setIsCompleted(false) : setIsCompleted(true);
    };

    // остальная часть массива, которую показываем на кнопку "ещё" по частям
    function handleShowMoreMovies(movies, end) {
        setIsLoading(true)
        const finalSlicedMovies = movies.slice(0, end);

        setMoviesToShow(finalSlicedMovies);
        setMoreMovies(end);

        if (end >= movies.length) {
            setIsCompleted(true);
            setMoreMovies(0);
        } else {
            setIsCompleted(false);
        }
        setIsLoading(false)
    };

    function fetchMovies() {
        if (JSON.parse(localStorage.getItem('movies')) !== null) {
            setMovies(JSON.parse(localStorage.getItem('movies')))
        } else {
            moviesApi
                .getMovies()
                .then((movies) => {
                    setIsLoading(true)
                    setMovies(movies);
                    localStorage.setItem('movies', JSON.stringify(movies));
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() =>
                    setIsLoading(false)
                );
        }
    }

    return (
        <main className='movies'>
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
                request={request}
                initialMovies={moviesToShow}
                isCompleted={isCompleted}
                onShowMore={() => handleShowMoreMovies(filterMovies(), moreMovies + moviesPerPage)}
                onMovieLike={onMovieLike}
                onMovieDelete={onMovieDelete}
            />
            <Footer />
        </main>
    );
}

export default Movies;