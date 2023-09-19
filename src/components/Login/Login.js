import React from 'react';
import '../RegisterLoginForm/RegisterLoginForm.css';
import RegisterLoginForm from '../RegisterLoginForm/RegisterLoginForm';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import { EMAIL_REGEXP } from '../../utils/constants';

function Login({ onLogin, isLoading }) {
  const { enteredValues, errors, handleChange, isFormValid } =
    useFormWithValidation();

  function handleFormSubmit(event) {
    event.preventDefault();
    onLogin({
      email: enteredValues.email,
      password: enteredValues.password,
    });
  }
  return (
    <RegisterLoginForm
      title="Рады видеть!"
      buttonText="Войти"
      question="Еще не зарегистрированы?"
      linkText=" Регистрация"
      link="/signup"
      onSubmit={handleFormSubmit}
      isDisabled={!isFormValid}
      isLoading={isLoading}
    >
      <label className="register-login-form__field">
        E-mail
        <input
          name="email"
          className="register-login-form__input"
          id="email-input"
          type="email"
          placeholder="E-mail"
          onChange={handleChange}
          pattern={EMAIL_REGEXP}
          value={enteredValues.email || ''}
          required
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
          placeholder="Пароль"
          onChange={handleChange}
          value={enteredValues.password || ''}
          required
        />
        <span className="register-login-form__input-error">
          {errors.password}
        </span>
        <div className="register-login-form__space"></div>
      </label>
    </RegisterLoginForm>
  );
}

export default Login;
