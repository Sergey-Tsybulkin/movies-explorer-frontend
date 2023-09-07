import React from 'react';
import './NavigationPanel.css';
import { Link, NavLink } from 'react-router-dom';
import account from '../../images/profile.svg';

function NavigationPanel({ handleClose }) {
  return (
    <div className="navigation-panel">
      <div className="navigation-panel__wrapper"></div>
      <div className="navigation-panel__menu">
        <button
          className="navigation-panel__button-close hover"
          type="button"
          onClick={handleClose}
        ></button>
        <nav className="navigation-panel__links">
          <NavLink exact to="/" className="navigation-panel__link hover">
            Главная
          </NavLink>
          <NavLink to="/movies" className="navigation-panel__link hover">
            Фильмы
          </NavLink>
          <NavLink to="/saved-movies" className="navigation-panel__link hover">
            Сохранённые фильмы
          </NavLink>
        </nav>
        <Link to="/profile" className="navigation-panel__account-button hover">
          <img
            src={account}
            className="navigation-panel__account-image"
            alt="Кнопка аккаунта"
          />
        </Link>
      </div>
    </div>
  );
}

export default NavigationPanel;
