import React from "react";
import "./styles/SignRead.scss";

const SignRead = ({ number, nickname, title, content, date, time }) => {
  return (
    <div className="signRead">
      <div className="readtitle">{number}</div>
      <div className="readtitle">{nickname}</div>
      <div className="readtitle">{title}</div>
      <div className="readContent">{content}</div>
      <div className="readContent">{date}</div>
      <div className="readContent">{time}</div>
      <button className="signDeleteBtn">삭제</button>
    </div>
  );
};

export default SignRead;
