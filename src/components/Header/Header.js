import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Header.css';

import logo from '../../images/logo.svg';
import account from '../../images/profile.svg';
import NavigationPanel from '../NavigationPanel/NavigationPanel';
import burgerButton from '../../images/button-menu.svg';

function Header() {
  const location = useLocation();

  const [isClicked, setIsClicked] = React.useState(false);

  function handleOpen() {
    setIsClicked(true);
  }

  function handleClose() {
    setIsClicked(false);
  }

  const isNotLogged = () => {
    const { pathname } = location;
    return pathname === '/';
  };

  const isLogged = () => {
    const { pathname } = location;

    return (
      pathname === '/profile' ||
      pathname === '/movies' ||
      pathname === '/saved-movies'
    );
  };

  return (
    <>
      {isNotLogged() && (
        <header className="header header__landing-color" id="header">
          <Link to="/" className="header__logo">
            <img src={logo} alt="Логотип сайта" />
          </Link>
          <div className="header__container-sign">
            <Link to="/signup" className="header__button hover">
              Регистрация
            </Link>
            <Link
              to="/signin"
              className="header__button header__button-in hover"
            >
              Войти
            </Link>
          </div>
        </header>
      )}
      {isLogged() && (
        <header className="header" id="header">
          <Link to="/" className="header__logo">
            <img src={logo} alt="Логотип" />
          </Link>
          <div className="header__container_movies">
            <NavLink to="/movies" className="header__button hover">
              Фильмы
            </NavLink>
            <NavLink to="/saved-movies" className="header__button hover">
              Сохранённые фильмы
            </NavLink>
          </div>
          <div className="header__container-account hover">
            <Link to="/profile" className="header__account-button">
              <img
                src={account}
                className="header__account-image"
                alt="Кнопка входа в аккаунт"
              />
            </Link>
            <button
              className="header__button-menu"
              onClick={handleOpen}
              type="button"
            >
              <img src={burgerButton} alt="Кнопка меню" />
            </button>
          </div>
          {isClicked ? <NavigationPanel handleClose={handleClose} /> : ''}
        </header>
      )}
    </>
  );
}

export default Header;
