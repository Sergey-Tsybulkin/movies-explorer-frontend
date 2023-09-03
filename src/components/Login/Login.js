import React from "react";
import "../RegisterLoginForm/RegisterLoginForm.css";
import RegisterLoginForm from "../RegisterLoginForm/RegisterLoginForm";

function Login() {
  return (
    <RegisterLoginForm
      title="Рады видеть!"
      buttonText="Войти"
      question="Еще не зарегистрированы?"
      linkText=" Регистрация"
      link="/signup"
    >
      <label className="form__field">
        E-mail
        <input
          name="email"
          className="form__input"
          id="email-input"
          type="email"
          placeholder="E-mail"
          required
        />
        <span className="form__input-error">{}</span>
      </label>
      <label className="form__field">
        Пароль
        <input
          name="password"
          className="form__input"
          id="password-input"
          type="password"
          placeholder="Пароль"
          required
        />
        <span className="form__input-error">{}</span>
      </label>
    </RegisterLoginForm>
  );
}

export default Login;