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
    const [moviesToShow, setMoviesToShow] = useState([]);

    // useEffect(() => {
    //     mainApi
    //         .getSavedMovies()
    //         .then((movies) => {
    //             setSavedMovies(movies);

    //         })
    //         .catch(console.log)
    // }, [])

    useEffect(() => {
        fetchMovies()
    }, []);

    function handleCheckboxToggle() {
        setCheckBox(!checkBox);
        localStorage.setItem('savedCheckBox', checkBox);
        setMoviesToShow(filterOnCheckBox())
    }

function handleChange(evt) {
    setRequest(evt.target.value);
}

function handleSearchCheck(evt) {
    evt.preventDefault();
    if (checkBox) {
        localStorage.setItem('savedCheckBox', checkBox);
    }
    if (request) {
        localStorage.setItem('savedRequest', request);
        setMoviesToShow(filterMovies());
    }
}

function filterMovies() {
    const filteredMovies = moviesToShow.filter((movie) => {
        if (checkBox && movie.duration >= 40) {
            return false;
        }

        return movie.nameRU.toLowerCase().includes(request.toLowerCase())
            || movie.nameEN.toLowerCase().includes(request.toLowerCase());
    });

    return filteredMovies;
}

function filterOnCheckBox() {
    if (request === '') {
        return !checkBox ? savedMovies.filter(({ duration }) => duration <= 40) : savedMovies;
    } else {
        return !checkBox ? moviesToShow.filter(({ duration }) => duration <= 40) : moviesToShow;
    }
}

// function handleSearchCheck(evt) {
//     evt.preventDefault();
//     if (checkBox) {
//         localStorage.setItem('checkBox', checkBox);
//     }
//         if (request) {
//             localStorage.setItem('request', request);
//             setMoviesToShow(filterMovies());
//         }
//     }

function fetchMovies() {
    if (JSON.parse(localStorage.getItem('savedMovies')) !== null) {
        setMoviesToShow(JSON.parse(localStorage.getItem('savedMovies')))
    } else {
        mainApi
            .getSavedMovies()
            .then((movies) => {
                setMoviesToShow(movies);
                localStorage.setItem('savedMovies', JSON.stringify(movies));
            })
            .catch((err) => {
                console.log(err);
            });
    }
}


// function handleSavedMovies(request) {
//     const filteredMoviesArr = savedMovies.filter((movie) => {
//         return movie.nameRU.toLowerCase().includes(request.toLowerCase())
//     });
//     const shortMovies = filteredMoviesArr.filter(({ duration }) => duration <= 40);
//     // const searchResult = checkBox ? filteredMoviesArr.filter(({ duration }) => duration <= 40) : filteredMoviesArr;

//     // if (checkBox) {
//     //     setSavedMovies(shortMovies)
//     // } else if (filteredMoviesArr.length !== 0) {
//     //     setSavedMovies(filteredMoviesArr)
//     // } else {
//     //     setSavedMovies([])
//     // }
//     // return;
// }

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