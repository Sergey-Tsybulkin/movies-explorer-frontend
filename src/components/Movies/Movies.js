import React, { useState, useEffect } from 'react';
import './Movies.css';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import { filterMovies, filterShortMovies } from '../../utils/';
import * as movies from '../../utils/MoviesApi';

function Movies({ loggedIn, handleLikeFilm, onDeleteCard, savedMovies }) {
  const [isLoading, setIsLoading] = useState(false);
  const [initialCardsMovies, setInitialCardsMovies] = useState([]);

  const [isShortFilm, setisShortFilm] = useState(false);

  const [isReqError, setisReqError] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  const [filteredMovies, setFilteredMovies] = useState([]);

  function handleShortFilmToggle() {
    setisShortFilm(!isShortFilm);
    if (!isShortFilm) {
      if (filterShortMovies(initialCardsMovies).length === 0) {
        setFilteredMovies(filterShortMovies(initialCardsMovies));
      } else {
        setFilteredMovies(filterShortMovies(initialCardsMovies));
      }
    } else {
      setFilteredMovies(initialCardsMovies);
    }
    localStorage.setItem('shortMovies', !isShortFilm);
  }

  function handleUpdateFilteredMovies(movies, query, short) {
    const moviesCardList = filterMovies(movies, query, short);
    setInitialCardsMovies(moviesCardList);
    setFilteredMovies(
      short ? filterShortMovies(moviesCardList) : moviesCardList
    );
    localStorage.setItem('movies', JSON.stringify(moviesCardList));
    localStorage.setItem('everyMovies', JSON.stringify(movies));
  }

  function onSearchMoviesFilms(query) {
    localStorage.setItem('movieSearch', query);
    localStorage.setItem('shortMovies', isShortFilm);

    if (localStorage.getItem('everyMovies')) {
      const movies = JSON.parse(localStorage.getItem('everyMovies'));
      handleUpdateFilteredMovies(movies, query, isShortFilm);
    } else {
      setIsLoading(true);
      movies
        .getMovies()
        .then((cardsData) => {
          handleUpdateFilteredMovies(cardsData, query, isShortFilm);
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
        setFilteredMovies(filterShortMovies(movies));
      } else {
        setFilteredMovies(movies);
      }
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('shortMovies') === 'true') {
      setisShortFilm(true);
    } else {
      setisShortFilm(false);
    }
  }, []);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="movies">
        <SearchForm
          isShortFilm={isShortFilm}
          onSearchMoviesFilms={onSearchMoviesFilms}
          onFilterMovies={handleShortFilmToggle}
        />
        <MoviesCardList
          isReqError={isReqError}
          isNotFound={isNotFound}
          cards={filteredMovies}
          isLoading={isLoading}
          isSavedFilms={false}
          savedMovies={savedMovies}
          handleLikeFilm={handleLikeFilm}
          onDeleteCard={onDeleteCard}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
