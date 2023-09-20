import React from 'react';
import './MoviesCard.css';
// import image__33word from '../../images/pic_33_word_design.jpg';
// import image__kino from '../../images/pic__kinoalmanah.jpg';
// import image__benksi from '../../images/pic__benksi.jpg';

import { transformDuration } from '../../utils/transform';

function MoviesCard({
  card,
  isSavedFilms,
  handleLikeFilm,
  onDeleteMovie,
  saved,
  savedMovies,
}) {
  function onMovieClick() {
    if (saved) {
      onDeleteMovie(
        savedMovies.filter((movies) => movies.movieId === card.id)[0]
      );
    } else {
      handleLikeFilm(card);
    }
  }

  function onDelete() {
    onDeleteMovie(card);
  }

  const cardLikeButtonClassName = `${
    saved
      ? 'movies-card__like-button hover'
      : 'movies-card__like-button movies-card__like-button_active hover'
  }`;

  return (
    <li key={card.id} className="movies-card">
      <a href={card.trailerLink} rel="noreferrer" target="_blank">
        <img
          className="movies-card__image"
          alt={card.nameRU}
          src={
            isSavedFilms
              ? card.image
              : `https://api.nomoreparties.co/${card.image.url}`
          }
        />
      </a>

      <div className="movies-card__container">
        <h2 className="movies-card__title">{card.nameRU}</h2>
        {isSavedFilms ? (
          <button
            type="button"
            className="movies-card__delete-button hover"
            onClick={onDelete}
          ></button>
        ) : (
          <button
            type="button"
            className={cardLikeButtonClassName}
            onClick={onMovieClick}
          ></button>
        )}
      </div>
      <span className="movies-card__duration">
        {transformDuration(card.duration)}
      </span>
    </li>
  );
}

export default MoviesCard;
