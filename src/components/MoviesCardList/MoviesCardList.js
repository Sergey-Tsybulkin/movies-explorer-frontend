import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <section className="movies-cards">
      <MoviesCard />

      <div className="movies-cards__button-wrapper">
        <button className="movies-cards__button hover">Ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList;
