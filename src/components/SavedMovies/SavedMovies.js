import React, { useState, useEffect } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { transformMovies, shortMoviesDurationFilter } from '../../utils/transform';

function SavedMovies({ loggedIn, savedMovies, onDeleteMovie }) {
  const [filteredMovies, setFilteredMovies] = useState(savedMovies);
  const [isShortMovie, setIsShortMovie] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  function onSearchMoviesFilms(query) {
    setSearchQuery(query);
  }

  function handleShortToggle() {
    setIsShortMovie(!isShortMovie);
  }

  useEffect(() => {
    const moviesCardList = transformMovies(savedMovies, searchQuery);
    setFilteredMovies(
      isShortMovie ? shortMoviesDurationFilter(moviesCardList) : moviesCardList
    );
  }, [savedMovies, isShortMovie, searchQuery]);

  useEffect(() => {
    if (filteredMovies.length === 0) {
      setIsNotFound(true);
    } else {
      setIsNotFound(false);
    }
  }, [filteredMovies]);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="movies">
        <SearchForm
          onSearchMoviesFilms={onSearchMoviesFilms}
          onFilterMovies={handleShortToggle}
        />
        <MoviesCardList
          isNotFound={isNotFound}
          isSavedFilms={true}
          cards={filteredMovies}
          savedMovies={savedMovies}
          onDeleteMovie={onDeleteMovie}
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
