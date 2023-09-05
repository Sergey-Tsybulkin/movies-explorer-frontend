import React from 'react';
import './MoviesCard.css';
import image from '../../images/pic_33_word_design.jpg'

function MoviesCard() {
  return (
    <ul className="movies-cards__list">
      <li className="movies-card">
        <img src={image} className="movies-card__image" alt="Картинка фильма" />
        <div className="movies-card__container">
          <div className="movies-card__title-block">
            <h2 className="movies-card__title">33 слова о дизайне</h2>
          </div>
          <button
            type="button"
            className="movies-card__delete-button hover"
          ></button>
        </div>
        <span className="movies-card__duration">1ч42м</span>
      </li>

      <li className="movies-card">
        <img src={image} className="movies-card__image" alt="Картинка фильма" />
        <div className="movies-card__container">
          <div className="movies-card__title-block">
            <h2 className="movies-card__title">33 слова о дизайне</h2>
          </div>
          <button
            type="button"
            className="movies-card__like-button card__like-button_active hover"
          ></button>
        </div>
        <span className="movies-card__duration">1ч42м</span>
      </li>

      <li className="movies-card">
        <img src={image} className="movies-card__image" alt="Картинка фильма" />
        <div className="movies-card__container">
          <div className="movies-card__title-block">
            <h2 className="movies-card__title">33 слова о дизайне</h2>
          </div>
          <button
            type="button"
            className="movies-card__like-button card__like-button_active hover"
          ></button>
        </div>
        <span className="movies-card__duration">1ч42м</span>
      </li>

      <li className="movies-card">
        <img src={image} className="movies-card__image" alt="Картинка фильма" />
        <div className="movies-card__container">
          <div className="movies-card__title-block">
            <h2 className="movies-card__title">33 слова о дизайне</h2>
          </div>
          <button
            type="button"
            className="movies-card__like-button card__like-button_active hover"
          ></button>
        </div>
        <span className="movies-card__duration">1ч42м</span>
      </li>

      <li className="movies-card">
        <img src={image} className="movies-card__image" alt="Картинка фильма" />
        <div className="movies-card__container">
          <div className="movies-card__title-block">
            <h2 className="movies-card__title">33 слова о дизайне</h2>
          </div>
          <button
            type="button"
            className="movies-card__like-button card__like-button_active hover"
          ></button>
        </div>
        <span className="movies-card__duration">1ч42м</span>
      </li>
    </ul>
  );
}

export default MoviesCard;
