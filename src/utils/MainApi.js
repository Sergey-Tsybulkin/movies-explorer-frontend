/////////////////////////////////////////////////// change

export const ORIGIN_URL = "http://localhost:3000";
// export const ORIGIN_URL = 'https://api.moviepoisk.nomoredomainsicu.ru';

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`${res.status}`);
};

export const register = (name, email, password) => {
  return fetch(`${ORIGIN_URL}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  }).then((res) => checkResponse(res));
};

export const login = (email, password) => {
  return fetch(`${ORIGIN_URL}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then((res) => checkResponse(res));
};

export const getToken = (token) => {
  return fetch(`${ORIGIN_URL}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => checkResponse(res));
};

export const getUserData = () => {
  return fetch(`${ORIGIN_URL}/users/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    },
  }).then((res) => checkResponse(res));
};

export const updateUserData = (data) => {
  return fetch(`${ORIGIN_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
    }),
  }).then((res) => checkResponse(res));
};

export const getMovies = () => {
  return fetch(`${ORIGIN_URL}/movies`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    },
  }).then((res) => checkResponse(res));
};

export const addMovie = (data) => {
  return fetch(`${ORIGIN_URL}/movies`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      country: data.country,
      director: data.director,
      duration: data.duration,
      year: data.year,
      description: data.description,
      image: 'https://api.nomoreparties.co' + data.image.url,
      trailerLink: data.trailerLink,
      thumbnail:
        'https://api.nomoreparties.co' + data.image.formats.thumbnail.url,
      movieId: data.id,
      nameRU: data.nameRU,
      nameEN: data.nameEN,
    }),
  }).then((res) => checkResponse(res));
};

export const deleteMovie = (cardId) => {
  return fetch(`${ORIGIN_URL}/movies/${cardId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    },
  }).then((res) => checkResponse(res));
};
