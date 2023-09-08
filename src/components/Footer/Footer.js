import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__description">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container">
        <p className="footer__info-year">© {new Date().getFullYear()}</p>
        <a
          href="https://practicum.yandex.ru"
          className="footer__link hover"
          target="_blank"
          rel="noreferrer"
        >
          Яндекс.Практикум
        </a>
        <a
          href="https://github.com/Sergey-Tsybulkin"
          className="footer__link hover"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
    </footer>
  );
}

export default Footer;
