import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import "./Modal.scss";

const Modal = ({ database, usage, description }) => {
  const history = useHistory();
  let [isOpen, setIsOpen] = useState(true);
  const [length, setLength] = useState(0);
  const textareaRef = useRef();

  const textCount = () => {
    setLength(textareaRef.current.value.length);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = (e) => {
    if (e.target.classList.contains("modalSubmit")) {
      if (length < 20) {
        alert("최소 20자 이상 작성해주세요.");
      } else {
        alert("접수되었습니다. 감사합니다.");
        sendReport(e);
        setIsOpen(false);
      }
    } else {
      setIsOpen(false);
    }
  };

  const sendReport = (e) => {
    e.preventDefault();
    const report = {
      id: database.reportId(),
      reporterId: history?.location?.state?.id,
      nickname: database.reporterNick(),
      content: textareaRef.current.value,
    };
    database.saveReport(report);
  };

  return (
    <div className="modal">
      <div className="modalSwitch" onClick={openModal}>
        {usage}
      </div>
      {isOpen ? (
        <>
          <div className="modalBackground" onClick={closeModal}></div>
          <div className="modalContainer">
            <div className="modalCloseBtn" onClick={closeModal}>
              닫기
            </div>
            <div className="modalTitle">
              {usage}
              <div className="modalDescription">{description}</div>
            </div>

            <textarea
              ref={textareaRef}
              className="modalContent"
              placeholder="최소 20자 이상 작성해주세요."
              onChange={textCount}
            ></textarea>
            <div
              className={length < 20 ? "modalSubmit off" : "modalSubmit"}
              onClick={closeModal}
            >
              확인
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Modal;
