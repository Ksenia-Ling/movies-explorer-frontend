class MoviesApi {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }

    _checkResponce = (response) =>
        response.ok
            ? response.json()
            : Promise.reject(new Error(`Ошибка ${response.status}: ${response.statusText}`));


    getMovies(jwt) {
        return fetch(this._url, { headers: this._headers })
            .then(this._checkResponce)
    }
}

export const moviesApi = new MoviesApi({
    url: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        'Content-Type': 'application/json'
    }
});
