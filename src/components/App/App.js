import { Switch, Route, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import NotFound from '../NotFound/NotFound.js';
import { initialMovies } from '../../utils/initialMovies.js';
import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';

function App() {

  const history = useHistory();

  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([mainApi.getUserInfo(), mainApi.getSavedMovies()])
        .then(([userInfo, movies]) => {
          setCurrentUser(userInfo)
          setSavedMovies(movies)
          localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
        })
        .catch(console.log)
    }
  }, [isLoggedIn])

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn) {
      handleCheckToken();
    }
  }, []);

  function handleCheckToken() {
    mainApi
      .checkToken()
      .then(() => {
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleRegister(data) {
    mainApi
      .register(data)
      .then(() => {
        setIsRegistered(true);
        handleLogin(data);
        // setisToolTipPopupOpen(true);
      })
      .catch((err) => {
        console.log(err);
        setIsRegistered(false);
        // setisToolTipPopupOpen(true);
      })
  }

  function handleLogin(data) {
    mainApi
      .authorize(data)
      .then(() => {
        localStorage.setItem('loggedIn', 'true');
        setIsLoggedIn(true);
        history.push('/movies');
      })
      .catch((err) => {
        console.log(err);
        // setisToolTipPopupOpen(true);
      })
  }

  function handleLogOut() {
    setIsLoggedIn(false);
    localStorage.removeItem('loggedIn');
    localStorage.clear()
    history.push('/signin');
  }

  function handleEditProfile(userInfo) {
    mainApi
      .editUserInfo(userInfo)
      .then((newInfo) => {
        setCurrentUser(newInfo);
      })
      .catch(console.log);
  };

  function handleMovieLike(movie) {
    // const isLiked = likedMovies.some((i) => i.movieId === movie.id);
    const isSaved = savedMovies.some((i) => i.movieId === movie.id);
    if (!isSaved) {
      mainApi
        .addMovie(movie)
        .then((newMovie) => {
          const moviesArr = Object.assign([], savedMovies);
          moviesArr.push(newMovie);
          setSavedMovies(moviesArr);
          localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
        })
        .catch(console.log);
    } else {
      handleMovieDelete(movie)
    }
  };

  function handleMovieDelete(movie) {
    const id = movie.movieId || movie.id;
    mainApi
      .deleteMovie(id)
      .then(() => {
        const updMoviesArr = savedMovies.filter((i) => i.movieId !== id);
        setSavedMovies(updMoviesArr)
        localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
      })
      .catch(console.log);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path='/'>
            <Main
              isLoggedIn={isLoggedIn} />
          </Route>
          <Route exact path='/movies'>
            <Movies
              savedMovies={savedMovies}
              isLoggedIn={isLoggedIn}
              onMovieLike={handleMovieLike}
              onMovieDelete={handleMovieDelete}
            />
          </Route>
          <Route exact path='/saved-movies'>
            <SavedMovies
              savedMovies={savedMovies}
              isLoggedIn={isLoggedIn}
              movies={initialMovies}
              onMovieDelete={handleMovieDelete}
            />
          </Route>
          <Route exact path='/profile'>
            <Profile
              isLoggedIn={isLoggedIn}
              onEditProfile={handleEditProfile}
              onLogout={handleLogOut}
            />
          </Route>
          <Route exact path='/signin'>
            <Login
              onLogin={handleLogin} />
          </Route>
          <Route exact path='/signup'>
            <Register
              onRegister={handleRegister}
            />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
