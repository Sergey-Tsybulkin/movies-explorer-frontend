export const ORIGIN_URL = 'https://api.nomoreparties.co/beatfilm-movies';

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`${res.status}`);
}

export function getMovies() {
  return fetch(ORIGIN_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(checkResponse);
}
