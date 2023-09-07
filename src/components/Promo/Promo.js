import React from 'react';
import './Promo.css';
import promoLandingLogo from '../../images/promo__landing-logo.svg';

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <img
        className="promo__landing-logo"
        src={promoLandingLogo}
        alt="Картинка логотипа с кольцами"
      />
    </section>
  );
}

export default Promo;
