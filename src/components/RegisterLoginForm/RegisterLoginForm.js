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
    <div className="register-login-form__container">
      <Link to="/" className="register-login-form__logo hover">
        <img src={logo} alt="Лого" />
      </Link>
      <h3 className="register-login-form__title">{title}</h3>
      <form
        className="register-login-form"
        id="register-login-form"
        onSubmit={onSubmit}
        noValidate
      >
        {children}
        <button
          type="submit"
          disabled={isDisabled ? true : false}
          className={
            isDisabled || isLoading
              ? 'register-login-form__button-save register-login-form__button-save_inactive hover'
              : 'register-login-form__button-save hover'
          }
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
    </div>
  );
}

export default RegisterLoginForm;
