import React from "react";
import "../RegisterLoginForm/RegisterLoginForm.css";
import RegisterLoginForm from "../RegisterLoginForm/RegisterLoginForm";

function Register() {
  return (
    <RegisterLoginForm
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      question="Уже зарегистрированы?"
      linkText=" Войти"
      link="/signin"
    >
      <label className="form__field">
        Имя
        <input
          name="name"
          className="form__input"
          id="name-input"
          type="text"
          placeholder="Введите имя"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="form__input-error">{}</span>
      </label>
      <label className="form__field">
        E-mail
        <input
          name="email"
          className="form__input"
          id="email-input"
          type="email"
          placeholder="Введите email"
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
          placeholder="Введите пароль"
          required
        />
        <span className="form__input-error">{}</span>
      </label>
    </RegisterLoginForm>
  );
}

export default Register;