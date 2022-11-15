import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
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
import ProtectedRoute from '../protectedRoute/ProtectedRoute';
import InfoToolTip from '../InfoToolTip/InfoToolTip';
import { mainApi } from '../../utils/MainApi';

function App() {

  const history = useHistory();
  const { pathname } = useLocation();

  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isToolTipPopupOpen, setisToolTipPopupOpen] = useState(false);


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
        history.replace(pathname);
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
      })
      .catch((err) => {
        console.log(err);
        setIsRegistered(false);
        setisToolTipPopupOpen(true);
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
        setisToolTipPopupOpen(true);
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
      setisToolTipPopupOpen(true);
  };

  function handleMovieLike(movie) {
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

  function closePopup() {
    setisToolTipPopupOpen(false);
};

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path='/'>
            <Main
              isLoggedIn={isLoggedIn} />
          </Route>
          <ProtectedRoute
            exact path='/movies'
            component={Movies}
            savedMovies={savedMovies}
            isLoggedIn={isLoggedIn}
            onMovieLike={handleMovieLike}
            onMovieDelete={handleMovieDelete}
            isPopupOpen={isToolTipPopupOpen}
          />
          <ProtectedRoute
            exact path='/saved-movies'
            component={SavedMovies}
            savedMovies={savedMovies}
            isLoggedIn={isLoggedIn}
            movies={savedMovies}
            onMovieDelete={handleMovieDelete}
          />
          <ProtectedRoute
            exact path='/profile'
            component={Profile}
            isLoggedIn={isLoggedIn}
            onEditProfile={handleEditProfile}
            onLogout={handleLogOut}
          />

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

        <InfoToolTip
          isOpen={isToolTipPopupOpen}
          onClose={closePopup}
          toolTipText={"Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз!"}>
        </InfoToolTip>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
