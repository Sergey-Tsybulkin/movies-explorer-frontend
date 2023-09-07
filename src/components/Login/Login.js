import React from 'react';
import '../RegisterLoginForm/RegisterLoginForm.css';
import RegisterLoginForm from '../RegisterLoginForm/RegisterLoginForm';

function Login() {
  return (
    <RegisterLoginForm
      title="Рады видеть!"
      buttonText="Войти"
      question="Еще не зарегистрированы?"
      linkText=" Регистрация"
      link="/signup"
    >
      <label className="register-login-form__field">
        E-mail
        <input
          name="email"
          className="register-login-form__input"
          id="email-input"
          type="email"
          placeholder="E-mail"
          required
        />
        <span className="register-login-form__input-error">{}</span>
      </label>
      <label className="register-login-form__field">
        Пароль
        <input
          name="password"
          className="register-login-form__input"
          id="password-input"
          type="password"
          placeholder="Пароль"
          required
        />
        <span className="register-login-form__input-error">{}</span>
        <div className="login-form__space"></div>
      </label>
    </RegisterLoginForm>
  );
}

export default Login;
