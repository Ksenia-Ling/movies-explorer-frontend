import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';
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


function App() {

  const [currentUser, setCurrentUser] = useState({});

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route exact path='/movies'>
            <Movies
              movies={initialMovies}
            />
          </Route>
          <Route exact path='/saved-movies'>
            <SavedMovies
              movies={initialMovies}
            />
          </Route>
          <Route exact path='/profile'>
            <Profile />
          </Route>
          <Route exact path='/signin'>
            <Login />
          </Route>
          <Route exact path='/signup'>
            <Register />
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
