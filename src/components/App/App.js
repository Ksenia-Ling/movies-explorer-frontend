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
  const [savedMovies, setSavedMovies] = useState([]);
  const [isToolTipPopupOpen, setIsToolTipPopupOpen] = useState(false);
  const [toolTipData, setToolTipData] = useState({ success: false, text: '' });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));

      if (savedMovies === null) {
        mainApi.getSavedMovies()
          .then((movies) => {
            setSavedMovies(movies)
            localStorage.setItem('savedMovies', JSON.stringify(movies));
          })
          .catch((err) => {
            console.log(err);
            setIsToolTipPopupOpen(true);
            setToolTipData({
              success: false,
              text: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз!'
            });
          });
      } else {
        setSavedMovies(savedMovies);
      }
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
      .then((userInfo) => {
        setCurrentUser(userInfo)
        setIsLoggedIn(true);
        history.replace(pathname);
      })
      .catch((err) => {
        console.log(err);
        handleLogOut();
        setIsToolTipPopupOpen(true);
        setToolTipData({
          success: false,
          text: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз!'
        });
      })
  }

  function handleRegister(data) {
    mainApi
      .register(data)
      .then(() => {
        setIsLoading(true);
        handleLogin(data);
      })
      .catch((err) => {
        console.log(err);
        setIsToolTipPopupOpen(true);
        setToolTipData({
          success: false,
          text: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз!'
        });
      })
      .finally(() =>
        setIsLoading(false)
      );
  }

  function handleLogin(data) {
    mainApi
      .authorize(data)
      .then(() => {
        setIsLoading(true);
        localStorage.setItem('loggedIn', 'true');
        setIsLoggedIn(true);
        history.push('/movies');
      })
      .catch((err) => {
        console.log(err);
        setIsToolTipPopupOpen(true);
        setToolTipData({
          success: false,
          text: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз!'
        });
      })
      .finally(() =>
        setIsLoading(false)
      );
  }

  function handleLogOut() {
    mainApi.logout()
      .then(() => {
        setIsLoading(true);
        setIsLoggedIn(false);
        localStorage.removeItem('loggedIn');
        localStorage.clear()
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
        setIsToolTipPopupOpen(true);
        setToolTipData({
          success: false,
          text: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз!'
        });
      })
      .finally(() =>
        setIsLoading(false)
      );
  }

  function handleEditProfile(userInfo) {
    mainApi
      .editUserInfo(userInfo)
      .then((newInfo) => {
        setCurrentUser(newInfo);
        setToolTipData({
          success: true,
          text: 'Данные успешно обновлены!'
        });
      })
      .catch((err) => {
        console.log(err);
        setToolTipData({
          success: false,
          text: 'При обновлении данных произошла ошибка!'
        });
      })
      .finally(() => {
        setIsToolTipPopupOpen(true);
      });
  }

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
        .catch((err) => {
          console.log(err);
          setToolTipData({
            success: false,
            text: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз!'
          });
          setIsToolTipPopupOpen(true);
        });
    } else {
      handleMovieDelete(movie)
    }
  }

  function handleMovieDelete(movie) {
    const id = movie.movieId || movie.id;
    mainApi
      .deleteMovie(id)
      .then(() => {
        const updMoviesArr = savedMovies.filter((i) => i.movieId !== id);
        setSavedMovies(updMoviesArr)
        localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
      })
      .catch((err) => {
        console.log(err);
        setToolTipData({
          success: false,
          text: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз!'
        });
        setIsToolTipPopupOpen(true);
      });
  }

  function closePopup() {
    setIsToolTipPopupOpen(false);
  }

  function handleError() {
    setToolTipData({
      success: false,
      text: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз!'
    });
    setIsToolTipPopupOpen(true);
  }

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
            handleError={handleError}
          />
          <ProtectedRoute
            exact path='/saved-movies'
            component={SavedMovies}
            savedMovies={savedMovies}
            isLoggedIn={isLoggedIn}
            movies={savedMovies}
            handleError={handleError}
            onMovieDelete={handleMovieDelete}
          />
          <ProtectedRoute
            exact path='/profile'
            component={Profile}
            isLoading={isLoading}
            isLoggedIn={isLoggedIn}
            onEditProfile={handleEditProfile}
            onLogout={handleLogOut}
          />

          <Route exact path='/signin'>
            <Login
              isLoggedIn={isLoggedIn}
              isLoading={isLoading}
              onLogin={handleLogin} />
          </Route>
          <Route exact path='/signup'>
            <Register
              isLoggedIn={isLoggedIn}
              isLoading={isLoading}
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
          toolTipData={toolTipData}>
        </InfoToolTip>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
