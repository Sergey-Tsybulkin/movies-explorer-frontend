import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

import logo from "../../images/logo.svg";
import account from "../../images/profile.svg";

function Header({ loggedIn }) {
  return (
    <>
      {!loggedIn ? (
        <header className="header header__landing-color" id="header">
          <Link to="/" className="header__logo">
            <img src={logo} alt="Логотип сайта" />
          </Link>
          <div className="header__container-sign">
            <Link to="/signup" className="header__button hover">
              Регистрация
            </Link>
            <Link to="/signin" className="header__button header__button-in hover">
              Войти
            </Link>
          </div>
        </header>
      ) : (
        <header className="header" id="header">
          <Link to="/" className="header__logo">
            <img src={logo} alt="Логотип" />
          </Link>
          <div className="header__container_movies">
            <NavLink
              to="/movies"
              className="header__button hover"
              activeClassName="header__button_active"
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className="header__button hover"
              activeClassName="header__button_active"
            >
              Сохранённые фильмы
            </NavLink>
          </div>
          <div className="header__container-account hover">
            <Link to="/profile" className="header__account-button">
              <img src={account} alt="Аккаунт" />
            </Link>
          </div>
        </header>
      )}
    </>
  );
}

export default Header;
