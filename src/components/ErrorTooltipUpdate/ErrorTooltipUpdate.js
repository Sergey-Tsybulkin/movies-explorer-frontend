import React from "react";
import "../ErrorTooltip/ErrorTooltip.css";

function ErrorTooltipUpdate(props) {
  return (
    <div
      className={`popup popup_type_tooltip ${
        props.isOpen ? "popup_opened" : ""
      }`}
      onClick={props.onCloseOverlay}
    >
      <div className="popup__wrapper">
        {props.isUpdate ? (
          <>
            <p className="popup__title">Данные изменены успешно!</p>
          </>
        ) : (
          <>
            <p className="popup__title">
              Произошла ошибка при обновлении вашего профиля!
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

export default ErrorTooltipUpdate;
