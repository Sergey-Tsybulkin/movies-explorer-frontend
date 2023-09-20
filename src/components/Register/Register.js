import React from 'react';
import '../RegisterLoginForm/RegisterLoginForm.css';
import RegisterLoginForm from '../RegisterLoginForm/RegisterLoginForm';

import { EMAIL_REGEXP } from '../../utils/constants';
import useFormWithValidation from '../../hooks/useFormWithValidation';

function Register({ onRegister, isLoading }) {
  const { enteredValues, errors, handleInputChange, isFormValid } =
    useFormWithValidation();

  function handleSubmit(event) {
    event.preventDefault();
    onRegister({
      name: enteredValues.name,
      email: enteredValues.email,
      password: enteredValues.password,
    });
  }
  return (
    <RegisterLoginForm
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      question="Уже зарегистрированы?"
      linkText=" Войти"
      link="/signin"
      onSubmit={handleSubmit}
      isDisabled={!isFormValid}
      isLoading={isLoading}
    >
      <label className="register-login-form__field">
        Имя
        <input
          name="name"
          className="register-login-form__input"
          id="name-input"
          type="text"
          placeholder="Введите имя"
          minLength="2"
          maxLength="30"
          required
          onChange={handleInputChange}
          value={enteredValues.name || ''}
        />
        <span className="register-login-form__input-error">{errors.name}</span>
      </label>
      <label className="register-login-form__field">
        E-mail
        <input
          name="email"
          className="register-login-form__input"
          id="email-input"
          type="email"
          placeholder="Введите email"
          required
          onChange={handleInputChange}
          pattern={EMAIL_REGEXP}
          value={enteredValues.email || ''}
        />
        <span className="register-login-form__input-error">{errors.email}</span>
      </label>
      <label className="register-login-form__field">
        Пароль
        <input
          name="password"
          className="register-login-form__input"
          id="password-input"
          type="password"
          placeholder="Введите пароль"
          required
          onChange={handleInputChange}
          value={enteredValues.password || ''}
        />
        <span className="register-login-form__input-error">
          {errors.password}
        </span>
      </label>
    </RegisterLoginForm>
  );
}

export default Register;
