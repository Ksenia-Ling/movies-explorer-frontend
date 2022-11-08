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

  useEffect(() => {
    if (isLoggedIn) {
      mainApi
        .getUserInfo()
        .then(setCurrentUser)
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
        history.push('/movies');
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
        // setisToolTipPopupOpen(true);
        history.push('/signin');
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
    history.push('/signin');
  }

  function handleEditProfile(userInfo) {
    mainApi
      .editProfile(userInfo.name, userInfo.about)
      .then((newInfo) => {
        setCurrentUser(newInfo);
      })
      .catch(console.log);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route exact path='/movies'>
            <Movies
              isLoggedIn={isLoggedIn}
              movies={initialMovies}
            />
          </Route>
          <Route exact path='/saved-movies'>
            <SavedMovies
              isLoggedIn={isLoggedIn}
              movies={initialMovies}
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
