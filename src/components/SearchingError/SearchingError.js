import React from 'react';
import './SearchingError.css';

function SearchError({ errorText }) {
  return <p className="searching__error">{errorText}</p>;
}
export default SearchError;
