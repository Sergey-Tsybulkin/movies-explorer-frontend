import React from "react";
import "./ErrorTooltip.css";

function ErrorTooltip(props) {
  return (
    <div
      className={`popup popup_type_tooltip ${
        props.isOpen ? "popup_opened" : ""
      }`}
      onClick={props.onCloseOverlay}
    >
      <div className="popup__wrapper">
        {props.isSuccess ? (
          <>
            <p className="popup__title">
              Добро пожаловать на сайт. Удачных поисков фильмов!
            </p>
          </>
        ) : (
          <>
            <p className="popup__title">
              Что-то пошло не так. Попробуйте еще раз!
            </p>
          </>
        )}

        <button
          type="button"
          className="popup__close-button hover"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}

export default ErrorTooltip;
