import React, { useRef } from "react";
import "./styles/SignRead.scss";

const SignRead = ({
  database,
  user,
  number,
  nickname,
  title,
  content,
  date,
  time,
  toggleSign,
}) => {
  const idRef = useRef();

  const deleteSign = (e) => {
    e.preventDefault();
    database.removeSign(idRef.current.innerText, user, toggleSign);
  };

  return (
    <>
      <div className="signReadBackground" onClick={toggleSign}></div>
      <div className="signReadContainer">
        <div className="readCancelBtn" onClick={toggleSign}>
          돌아가기
        </div>
        <div className="readInfo">
          <div className="readNumber" ref={idRef}>
            {number}
          </div>
          <div className="readNickname">{nickname}</div>
          <div className="readDate">
            {date}, {time.slice(0, 5)}
          </div>
        </div>
        <div className="readTitle">{title}</div>
        <div className="readContent">{content}</div>
        <div className="signDeleteBtn" onClick={deleteSign}>
          삭제
        </div>
      </div>
    </>
  );
};

export default SignRead;
