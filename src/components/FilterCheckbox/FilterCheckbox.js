import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <label className='filter-checkbox hover'>
        <input id='short-movies' className='filter-checkbox__input' type='checkbox'></input>
        <span className='filter-checkbox__slider'></span>
        <span className="filter-checkbox__text">Короткометражки</span>
    </label>
);
};

export default FilterCheckbox;
