import { SHORTMOVIES_DURATION } from './constants';

export function shortMoviesDurationFilter(movies) {
  return movies.filter((movie) => movie.duration < SHORTMOVIES_DURATION);
}

export function transformDuration(duration) {
  const hours = Math.trunc(duration / 60);
  const minutes = duration % 60;
  if (hours === 0) {
    return `${minutes}м`;
  } else {
    return `${hours}ч ${minutes}м`;
  }
}

export function transformMovies(movies, query) {
  const moviesByUserQuery = movies.filter((movie) => {
    const movieRu = String(movie.nameRU).toLowerCase().trim();
    const movieEn = String(movie.nameEN).toLowerCase().trim();
    const userMovie = query.toLowerCase().trim();
    return (
      movieRu.indexOf(userMovie) !== -1 || movieEn.indexOf(userMovie) !== -1
    );
  });
  return moviesByUserQuery;
}
