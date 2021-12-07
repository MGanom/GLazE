import React, { useEffect, useState } from "react";
import "./Modal.scss";

const Modal = ({ usage }) => {
  let [isOpen, setIsOpen] = useState(true);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // if (isOpen) {
    //   console.log(
    //     document.getElementsByClassName("modalBackground")[0].classList
    //   );
    //   const toHide =
    //     document.getElementsByClassName("modalBackground")[0].classList;
    //   toHide.add("deactive");
    //   console.log(toHide);
    // } else {
    //   const toHide =
    //     document.getElementsByClassName("modalBackground")[0].classList;
    //   toHide.remove("deactive");
    //   console.log(toHide);
    // }
  });
  return (
    <div className="modal">
      <div className="modalSwitch" onClick={openModal}>
        {usage}
      </div>
      {isOpen ? (
        <>
          <div className="modalBackground"></div>
          <div className="modalContainer">
            <div className="modalCloseBtn" onClick={closeModal}>
              닫기
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
        </>
      ) : null}
    </div>
  );
};

export default Modal;
