import React from 'react';
import './NavigationPanel.css';
import { Link, NavLink } from 'react-router-dom';
import account from '../../images/profile.svg';

function NavigationPanel({ handleClose }) {
  const setActive = ({ isActive }) =>
    isActive ? 'navigation-panel__link_active' : 'navigation-panel__link';

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
          <NavLink exact to="/" className={setActive}>
            Главная
          </NavLink>
          <NavLink to="/movies" onClick={handleClose} className={setActive}>
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            onClick={handleClose}
            className={setActive}
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
        <Link to="/profile" className="navigation-panel__account-button hover">
          <img
            src={account}
            onClick={handleClose}
            className="navigation-panel__account-image"
            alt="Кнопка аккаунта"
          />
        </Link>
      </div>
    </div>
  );
}

export default NavigationPanel;
