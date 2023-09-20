import React, { useEffect, useContext, useState } from 'react';
import UserContext from '../../context/UserContext';

import './Profile.css';
import Header from '../Header/Header';
import { EMAIL_REGEXP } from '../../utils/constants';
import useFormWithValidation from '../../hooks/useFormWithValidation';

function Profile({ isLoading, signOut, onUpdateUser, loggedIn }) {
  const currentUser = useContext(UserContext);

  const { enteredValues, errors, handleInputChange, isFormValid, rebootForm } =
    useFormWithValidation();

  const [isLastValues, setIsLastValues] = useState(false);

  function handleFormSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: enteredValues.name,
      email: enteredValues.email,
    });
  }

  // reset after update
  useEffect(() => {
    if (currentUser) {
      rebootForm(currentUser);
    }
  }, [currentUser, rebootForm]);

  useEffect(() => {
    if (
      currentUser.name === enteredValues.name &&
      currentUser.email === enteredValues.email
    ) {
      setIsLastValues(true);
    } else {
      setIsLastValues(false);
    }
  }, [enteredValues]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className="profile">
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <form
          id="register-login-form"
          className="profile__form"
          onSubmit={handleFormSubmit}
          noValidate
        >
          <label className="profile__label">
            Имя
            <input
              name="name"
              className="profile__input"
              id="name-input"
              type="text"
              placeholder="Ваше имя"
              minLength="2"
              maxLength="30"
              required
              onChange={handleInputChange}
              value={enteredValues.name || ''}
            />
            <span className="profile__input-error">{errors.name}</span>
          </label>
          <label className="profile__label">
            E-mail
            <input
              name="email"
              className="profile__input"
              id="email-input"
              type="email"
              placeholder="Ваш адрес электронной почты"
              onChange={handleInputChange}
              pattern={EMAIL_REGEXP}
              value={enteredValues.email || ''}
              required
            />
            <span className="profile__input-error">{errors.email}</span>
          </label>
          <button
            type="submit"
            disabled={!isFormValid ? true : false}
            className={
              !isFormValid || isLoading || isLastValues
                ? 'profile__button-edit hover profile__button-edit_inactive'
                : 'profile__button-edit hover'
            }
          >
            Редактировать
          </button>
          <button
            type="button"
            className="profile__button-signout hover"
            onClick={signOut}
          >
            Выйти из аккаунта
          </button>
        </form>
      </section>
    </>
  );
}

export default Profile;
