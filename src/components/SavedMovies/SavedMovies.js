import React, { useState, useEffect } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { filterMovies, filterShortMovies } from '../../utils/utils';

function SavedMovies({ loggedIn, savedMovies, onDeleteCard }) {
  const [filteredMovies, setFilteredMovies] = useState(savedMovies);
  const [isShortFilm, setisShortFilm] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  function onSearchMoviesFilms(query) {
    setSearchQuery(query);
  }

  function handleShortToggle() {
    setisShortFilm(!isShortFilm);
  }

  useEffect(() => {
    const moviesCardList = filterMovies(savedMovies, searchQuery);
    setFilteredMovies(
      isShortFilm ? filterShortMovies(moviesCardList) : moviesCardList
    );
  }, [savedMovies, isShortFilm, searchQuery]);

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
          onDeleteCard={onDeleteCard}
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
