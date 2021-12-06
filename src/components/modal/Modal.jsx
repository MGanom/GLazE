import React, { useState } from "react";
import "./Modal.scss";

const Modal = ({ usage }) => {
  let [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="modal">
      <div className="modalSwitch" onClick={openModal}>
        {usage}
      </div>
      {isOpen ? (
        <div className="modalContainer">
          <div className="modalCloseBtn" onClick={closeModal}>
            X
          </div>
          <div className="modalTitle">{usage}</div>
          <textarea
            className="modalContent"
            placeholder="구현중입니다"
          ></textarea>
          <button className="modalSubmit" onClick={closeModal}>
            확인
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
