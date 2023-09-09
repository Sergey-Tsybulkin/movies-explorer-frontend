import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './RegisterLoginForm.css';

function RegisterLoginForm({
  children,
  title,
  buttonText,
  question,
  linkText,
  link,
  onSubmit,
  isDisabled,
  isLoading,
}) {
  return (
    <main className="register-login-form">
      <Link to="/" className="register-login-form__logo hover">
        <img src={logo} alt="Лого" />
      </Link>
      <h3 className="register-login-form__title">{title}</h3>
      <form
        className="register-login-form__form"
        id="register-login-form"
        onSubmit={onSubmit}
        noValidate
      >
        {children}
        <button
          type="submit"
          disabled={isDisabled ? true : false}
          className="register-login-form__button-save"
        >
          {buttonText}
        </button>
      </form>
      <p className="register-login-form__text">
        {question}
        <Link to={link} className="register-login-form__link hover">
          {linkText}
        </Link>
      </p>
    </main>
  );
}

export default RegisterLoginForm;
