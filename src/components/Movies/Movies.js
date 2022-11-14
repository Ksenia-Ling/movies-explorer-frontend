import { React, useState, useEffect } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { moviesApi } from '../../utils/MoviesApi';


function Movies({ likedMovies, isLoggedIn, onMovieLike, onMovieDelete }) {

    const [checkBox, setCheckBox] = useState(false);
    const [request, setRequest] = useState('');

    // стейты для поиска и отображения фильмов
    const [moviesPerPage, setMoviesPerPage] = useState(0);
    const [moviesToShow, setMoviesToShow] = useState([]);
    const [next, setNext] = useState(0);
    // закончился ли массив с фильмами
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        setCheckBox(localStorage.getItem('checkbox'));
        setRequest(localStorage.getItem('request'));
        setMoviesToShow(JSON.parse(localStorage.getItem('movies')));
    }, []);

    window.addEventListener('resize', function () {
        if (document.documentElement.clientWidth > 768) {
            setMoviesPerPage(3)
            setNext(12)
        } else if (document.documentElement.clientWidth > 480) {
            setMoviesPerPage(2)
            setNext(8)
        } else {
            setMoviesPerPage(2)
            setNext(5)
        }
    })

    function handleChange(evt) {
        setRequest(evt.target.value);
    }

    function handleCheckboxToggle() {
        setCheckBox(!checkBox);
    }

    //проверка на введённое значение перед поиском фильма
    function handleSearchCheck(evt) {
        evt.preventDefault();
        if (request) {
            handleSearchMovies()
        } else {
            return (
                <p>Нужно ввести ключевое слово</p>
            )
        }
    }

    // делим массив с фильмами на части, чтобы выдавать их в зависимости от ширины экрана
    function handleSliceMovies(movies, start, end) {
        const slicedMovies = movies.slice(start, end);
        const arrayForMovies = [];
        arrayForMovies.push(...slicedMovies);

        setMoviesToShow(arrayForMovies);
        if (next >= movies.length - moviesPerPage) {
            setIsCompleted(true);
        } else {
            setIsCompleted(false);
        }
    };

    //на кнопку "ещё" показываем часть массива фильмов
    function handleShowMoreMovies(movies) {
        handleSliceMovies(movies, next, next + moviesPerPage);
        setNext(next + moviesPerPage);
    };

    // логика фильтрации по ключевому слову
    function handleFilterMovies(movies, request) {
        const allSearchedMovies = movies.filter(function (movie) {
            return movie.NameRU.toLowerCase().includes(request.toLowerCase());
        })

        if (allSearchedMovies.length === 0) {
            return (
                <p>Ничего не найдено</p>
            )
        } else {
            return handleShowMoreMovies(allSearchedMovies)
            localStorage.setItem('movies', JSON.stringify(allSearchedMovies));
        }
    }

    // сам запрос фильмов с api и дальнейшая их обработка
    function handleSearchMovies() {
        moviesApi
            .getMovies()
            .then((movies) => {
                const shortMovies = movies.filter(function (movie) {
                    return movie.duration <= 40
                });
                if (checkBox) {
                    localStorage.setItem('checkBox', 'true');
                    handleFilterMovies(shortMovies, request)
                } else {
                    localStorage.setItem('checkBox', 'false')
                    handleFilterMovies(movies, request);
                    return;
                }
                localStorage.setItem('request', request);
            })
            .catch((err) => {
                console.log(err);
            });
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
            <MoviesCardList
                initialMovies={moviesToShow}
                isCompleted={isCompleted}
                onShowMore={handleShowMoreMovies}
                onMovieLike={onMovieLike}
                onMovieDelete={onMovieDelete}
            />
            <Footer />
        </main>
    );
}


export default Movies;