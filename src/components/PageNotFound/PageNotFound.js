import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
  return (
    <div className="not-found">
      <h2 className="not-found__title">404</h2>
      <span className="not-found__span">Страница не найдена</span>
      <Link to="/" className="not-found__button hover">
        Назад
      </Link>
    </div>
  );
}

export default PageNotFound;
