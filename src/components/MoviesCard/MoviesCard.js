import React from 'react';
import './MoviesCard.css';
import image__33word from '../../images/pic_33_word_design.jpg';
import image__kino from '../../images/pic__kinoalmanah.jpg';
import image__benksi from '../../images/pic__benksi.jpg';

function MoviesCard() {
  return (
    <ul className="movies-cards__list">
      <li className="movies-card">
        <img
          src={image__33word}
          className="movies-card__image"
          alt="Картинка фильма"
        />
        <div className="movies-card__container">
          <div className="movies-card__title-block">
            <h2 className="movies-card__title">33 слова о дизайне</h2>
          </div>
          <button
            type="button"
            className="movies-card__delete-button hover"
          ></button>
        </div>
        <span className="movies-card__duration">1ч 42м</span>
      </li>

      <li className="movies-card">
        <img
          src={image__kino}
          className="movies-card__image"
          alt="Картинка фильма"
        />
        <div className="movies-card__container">
          <div className="movies-card__title-block">
            <h2 className="movies-card__title">
              Киноальманах «100 лет дизайна»
            </h2>
          </div>
          <button
            type="button"
            className="movies-card__like-button card__like-button_active hover"
          ></button>
        </div>
        <span className="movies-card__duration">1ч 42м</span>
      </li>

      <li className="movies-card">
        <img
          src={image__benksi}
          className="movies-card__image"
          alt="Картинка фильма"
        />
        <div className="movies-card__container">
          <div className="movies-card__title-block">
            <h2 className="movies-card__title">В погоне за Бенкси</h2>
          </div>
          <button
            type="button"
            className="movies-card__like-button card__like-button_active hover"
          ></button>
        </div>
        <span className="movies-card__duration">1ч 42м</span>
      </li>

      <li className="movies-card">
        <img
          src={image__33word}
          className="movies-card__image"
          alt="Картинка фильма"
        />
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
        <img
          src={image__33word}
          className="movies-card__image"
          alt="Картинка фильма"
        />
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
        <img
          src={image__33word}
          className="movies-card__image"
          alt="Картинка фильма"
        />
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
        <img
          src={image__33word}
          className="movies-card__image"
          alt="Картинка фильма"
        />
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
        <img
          src={image__33word}
          className="movies-card__image"
          alt="Картинка фильма"
        />
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
