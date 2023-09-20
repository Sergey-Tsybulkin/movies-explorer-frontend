import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ onFilterMovies, isShortMovie }) {
  return (
    <label className="filter-checkbox hover">
      <input
        id="short-movies"
        className="filter-checkbox__input"
        type="checkbox"
        onChange={onFilterMovies}
        checked={isShortMovie}
      ></input>
      <span className="filter-checkbox__slider"></span>
      <span className="filter-checkbox__text">Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;
