import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onSearchMoviesFilms, onFilterMovies, isShortMovie }) {
  const location = useLocation();
  const [isQueryError, setIsQueryError] = useState(false);
  const [query, setQuery] = useState('');

  function handleFormSubmit(e) {
    e.preventDefault();
    if (query.trim().length === 0) {
      setIsQueryError(true);
    } else {
      setIsQueryError(false);
      onSearchMoviesFilms(query);
    }
  }
  function handleChangeQuery(e) {
    setQuery(e.target.value);
  }

  useEffect(() => {
    if (
      location.pathname === '/movies' &&
      localStorage.getItem('movieSearch')
    ) {
      const localQuery = localStorage.getItem('movieSearch');
      setQuery(localQuery);
    }
  }, [location]);

  return (
    <form className="search-form" id="register-login-form" onSubmit={handleFormSubmit}>
      <div className="search-form__container">
        <div className="search-form__wihout-checkbox">
          <input
            className="search-form__input"
            type="text"
            placeholder="Фильм"
            name="movie"
            id="search-input"
            onChange={handleChangeQuery}
            value={query || ''}
          />
          <button className="search-form__button hover" type="submit"></button>
          <span className="search-form__divide-line"></span>
        </div>
        <FilterCheckbox
          onFilterMovies={onFilterMovies}
          isShortMovie={isShortMovie}
        />
        {isQueryError && (
          <span className="search__form-error">
            Нужно ввести ключевое слово
          </span>
        )}
      </div>
    </form>
  );
}

export default SearchForm;
