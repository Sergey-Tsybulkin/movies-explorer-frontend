import React, { useState, useEffect } from 'react';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import { transformMovies, shortMoviesDurationFilter } from '../../utils/transform';
import * as movies from '../../utils/MoviesApi';

function Movies({ loggedIn, handleLikeFilm, onDeleteMovie, savedMovies }) {
  const [isLoading, setIsLoading] = useState(false);
  const [initialCardsMovies, setInitialCardsMovies] = useState([]);

  const [isShortMovie, setIsShortMovie] = useState(false);

  const [isReqError, setisReqError] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  const [filteredMovies, setFilteredMovies] = useState([]);

  function handleShortMovieToggle() {
    setIsShortMovie(!isShortMovie);
    if (!isShortMovie) {
      if (shortMoviesDurationFilter(initialCardsMovies).length === 0) {
        setFilteredMovies(shortMoviesDurationFilter(initialCardsMovies));
      } else {
        setFilteredMovies(shortMoviesDurationFilter(initialCardsMovies));
      }
    } else {
      setFilteredMovies(initialCardsMovies);
    }
    localStorage.setItem('shortMovies', !isShortMovie);
  }

  function handleMoviesFilterUpdate(movies, query, short) {
    const moviesCardList = transformMovies(movies, query, short);
    setInitialCardsMovies(moviesCardList);
    setFilteredMovies(
      short ? shortMoviesDurationFilter(moviesCardList) : moviesCardList
    );
    localStorage.setItem('movies', JSON.stringify(moviesCardList));
    localStorage.setItem('everyMovies', JSON.stringify(movies));
  }

  function onSearchMoviesFilms(query) {
    localStorage.setItem('movieSearch', query);
    localStorage.setItem('shortMovies', isShortMovie);

    if (localStorage.getItem('everyMovies')) {
      const movies = JSON.parse(localStorage.getItem('everyMovies'));
      handleMoviesFilterUpdate(movies, query, isShortMovie);
    } else {
      setIsLoading(true);
      movies
        .getMovies()
        .then((cardsData) => {
          handleMoviesFilterUpdate(cardsData, query, isShortMovie);
          setisReqError(false);
          console.log(cardsData);
        })
        .catch((err) => {
          setisReqError(true);
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }

  useEffect(() => {
    if (localStorage.getItem('movieSearch')) {
      if (filteredMovies.length === 0) {
        setIsNotFound(true);
      } else {
        setIsNotFound(false);
      }
    } else {
      setIsNotFound(false);
    }
  }, [filteredMovies]);

  useEffect(() => {
    if (localStorage.getItem('movies')) {
      const movies = JSON.parse(localStorage.getItem('movies'));
      setInitialCardsMovies(movies);
      if (localStorage.getItem('shortMovies') === 'true') {
        setFilteredMovies(shortMoviesDurationFilter(movies));
      } else {
        setFilteredMovies(movies);
      }
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('shortMovies') === 'true') {
      setIsShortMovie(true);
    } else {
      setIsShortMovie(false);
    }
  }, []);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="movies">
        <SearchForm
          isShortMovie={isShortMovie}
          onSearchMoviesFilms={onSearchMoviesFilms}
          onFilterMovies={handleShortMovieToggle}
        />
        <MoviesCardList
          isReqError={isReqError}
          isNotFound={isNotFound}
          cards={filteredMovies}
          isLoading={isLoading}
          isSavedFilms={false}
          savedMovies={savedMovies}
          handleLikeFilm={handleLikeFilm}
          onDeleteMovie={onDeleteMovie}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
