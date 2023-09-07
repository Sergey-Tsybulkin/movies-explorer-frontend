import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <nav className="portfolio__nav">
        <a
          href="https://Sergey-Tsybulkin.github.io/how-to-learn"
          target="_blank"
          rel="noreferrer"
          className="portfolio__link hover"
        >
          Статичный сайт
          <p className="portfolio__link__arrow">↗</p>
        </a>
        <a
          href="https://Sergey-Tsybulkin.github.io/russian-travel"
          target="_blank"
          rel="noreferrer"
          className="portfolio__link hover"
        >
          Адаптивный сайт
          <p className="portfolio__link__arrow">↗</p>
        </a>
        <a
          href="https://Sergey-Tsybulkin.github.io/mesto/"
          target="_blank"
          rel="noreferrer"
          className="portfolio__link hover"
        >
          Одностраничное приложение
          <p className="portfolio__link__arrow">↗</p>
        </a>
      </nav>
    </section>
  );
}

export default Portfolio;
