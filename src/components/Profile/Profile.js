import React from 'react';
import './Profile.css';
import Header from '../Header/Header';

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
          <button type="button" className="profile-button__edit hover">
            Редактировать
          </button>
          <button type="button" className="profile-button__signout hover">
            Выйти из аккаунта
          </button>
        </form>
      </section>
    </>
  );
}

export default Profile;
