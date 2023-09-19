import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import SearchingError from '../SearchingError/SearchingError';
import Preloader from '../Preloader/Preloader';

import {
  SHOW_MORE_RES_1280_PLUS,
  SHOW_MORE_RES_768,
  SHOW_MORE_320_480,
} from '../../utils/constants';

function MoviesCardList({
  cards,
  isLoading,
  isSavedFilms,
  savedMovies,
  isReqError,
  isNotFound,
  handleLikeFilm,
  onDeleteCard,
}) {
  const [displayMovies, setDisplayMovies] = useState(0);
  const { pathname } = useLocation();

  function displayCards() {
    const display = window.innerWidth;
    if (display > 1024) {
      setDisplayMovies(12);
    } else if (display > 750) {
      setDisplayMovies(8);
    } else {
      setDisplayMovies(5);
    }
  }

  function displayMore() {
    const display = window.innerWidth;
    if (display > 1024) {
      setDisplayMovies(displayMovies + SHOW_MORE_RES_1280_PLUS);
    } else if (display > 750) {
      setDisplayMovies(displayMovies + SHOW_MORE_RES_768);
    } else {
      setDisplayMovies(displayMovies + SHOW_MORE_320_480);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener('resize', displayCards);
    }, 500);
  });

  useEffect(() => {
    displayCards();
  }, []);

  function getSavedMovieCard(savedMovies, card) {
    return savedMovies.find((savedMovie) => savedMovie.movieId === card.id);
  }

  return (
    <section className="movies-cards">
      {isLoading && <Preloader />}
      {isNotFound && !isLoading && (
        <SearchingError errorText={'Ничего не найдено'} />
      )}
      {isReqError && !isLoading && (
        <SearchingError
          errorText={
            'Во время поискового запроса произошла ошибка, подождите немного и попробуйте снова'
          }
        />
      )}
      {!isLoading && !isReqError && !isNotFound && (
        <>
          {pathname === '/saved-movies' ? (
            <>
              <ul className="movies-cards__list">
                {cards.map((card) => (
                  <MoviesCard
                    key={isSavedFilms ? card._id : card.id}
                    saved={getSavedMovieCard(savedMovies, card)}
                    cards={cards}
                    card={card}
                    isSavedFilms={isSavedFilms}
                    handleLikeFilm={handleLikeFilm}
                    onDeleteCard={onDeleteCard}
                    savedMovies={savedMovies}
                  />
                ))}
              </ul>
              <div className="movies-cards__button-wrapper"></div>
            </>
          ) : (
            <>
              <ul className="movies-cards__list">
                {cards.slice(0, displayMovies).map((card) => (
                  <MoviesCard
                    key={isSavedFilms ? card._id : card.id}
                    saved={getSavedMovieCard(savedMovies, card)}
                    cards={cards}
                    card={card}
                    isSavedFilms={isSavedFilms}
                    handleLikeFilm={handleLikeFilm}
                    onDeleteCard={onDeleteCard}
                    savedMovies={savedMovies}
                  />
                ))}
              </ul>
              <div className="movies-cards__button-wrapper">
                {cards.length > displayMovies ? (
                  <button
                    className="movies-cards__button hover"
                    onClick={displayMore}
                  >
                    Ещё
                  </button>
                ) : (
                  ''
                )}
              </div>
            </>
          )}
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
