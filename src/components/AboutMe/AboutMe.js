import React from 'react';
import photo from '../../images/me.jpg';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__content">
          <h3 className="about-me__large-title">Сергей</h3>
          <p className="about-me__info">Фронтенд-разработчик, 34 года</p>
          <p className="about-me__description">
            Живу и работаю в Москве, закончил Омскую академию МВД России. Я
            люблю слушать музыку и писать код. Музыку я уже наслушался. Благодаря курсу
            Веб-разработчик в Яндекс Практикуме, понял, что мне интересна
            разработка.
          </p>
          <a
            href="https://github.com/Sergey-Tsybulkin"
            className="about-me__link"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img src={photo} alt="Фото" className="about-me__photo" />
      </div>
    </section>
  );
}

export default AboutMe;
