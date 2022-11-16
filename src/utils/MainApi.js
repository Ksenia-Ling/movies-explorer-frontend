class MainApi {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _checkResponce = (response) =>
    response.ok
      ? response.json()
      : Promise.reject(new Error(`Ошибка ${response.status}: ${response.statusText}`));


  register = (data) => {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name: data.name, email: data.email, password: data.password })
    })
      .then(res => this._checkResponce(res))
  };

  authorize = (data) => {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({ email: data.email, password: data.password })
    })
      .then(res => this._checkResponce(res))
  };

  checkToken = () => {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    })
      .then(res => this._checkResponce(res)
      )
  };

  getUserInfo(jwt) {
    return fetch(`${this._url}/users/me`, { headers: this._headers, credentials: 'include' })
      .then(this._checkResponce)
  }

  editUserInfo(data, jwt) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        name: data.name,
        email: data.email
      })
    })
      .then(this._checkResponce)
  }

  addMovie(movie) {
    return fetch(`${this._url}/movies`, {
      method: "POST",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co${movie.image.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
    })
      .then(this._checkResponce)
  }

  deleteMovie(movieId) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include',
    })
      .then(this._checkResponce)
  }

  getSavedMovies() {
    return fetch(`${this._url}/movies/`, {
      headers: this._headers,
      credentials: 'include',
    })
      .then(this._checkResponce)
  }
}

export const mainApi = new MainApi({
  url: 'https://api.movies.ksenia-ling.nomoredomains.icu',
  headers: {
    'Content-Type': 'application/json'
  }
});
