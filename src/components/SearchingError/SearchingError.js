import React from 'react';
import './SearchError.css';

function SearchError({ errorText }) {
  return <p className="searching__error">{errorText}</p>;
}
export default SearchError;
