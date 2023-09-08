import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <>
      <Header />
      <section className="profile">
        <h2 className="profile__title">Привет, Сергей!</h2>
        <form id="form" className="profile__form" noValidate>
          <label className="profile__label">
            Имя
            <input
              name="name"
              className="profile__input"
              id="name-input"
              type="text"
              placeholder="Сергей"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="profile__input-error">{}</span>
          </label>
          <label className="profile__label">
            E-mail
            <input
              name="email"
              className="profile__input"
              id="email-input"
              type="email"
              placeholder="pochta@yandex.ru"
              required
            />
            <span className="profile__input-error">{}</span>
          </label>
          <button type="submit" className="profile__button-edit hover">
            Редактировать
          </button>
          <Link to="/" type="button" className="profile__button-signout hover">
            Выйти из аккаунта
          </Link>
        </form>
      </section>
    </>
  );
}

export default Profile;
