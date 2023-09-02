import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project" id="about">
      <div className="about-project__container">
        <h2 className="about-project__title">
          Дипломный проект включал 5 этапов
        </h2>
        <p className="about-project__description">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <h2 className="about-project__title">
          На выполнение диплома ушло 5 недель
        </h2>
        <p className="about-project__description">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className="about-project__time">
        <p className="about-project__time__data">1 неделя</p>
        <p className="about-project__time__description">Back-end</p>
        <p className="about-project__time__data">4 недели</p>
        <p className="about-project__time__description">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
