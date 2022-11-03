import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <div className="page">
      <Header 
      isLoggedIn={ isLoggedIn }
      />
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route exact path='/movies'>
          <Movies />
        </Route>
        <Route exact path='/saved-movies'>
          <SavedMovies />
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
      </Switch>
    </div>
  );
}

export default App;
