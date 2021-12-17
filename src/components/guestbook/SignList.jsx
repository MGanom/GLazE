import React, { useState } from "react";
import SignRead from "./SignRead";
import "./styles/SignList.scss";

const SignList = ({ number, nickname, title, content, date, time }) => {
  const [onRead, setOnRead] = useState(false);

  const readSign = () => {
    setOnRead(true);
  };

  return (
    <div className="guestBookList">
      <div className="signNumber">{number}</div>
      <div className="signName">{nickname}</div>
      <div className="signTitle" onClick={readSign}>
        {title}
      </div>
      <div className="signDate">{date}</div>
      {onRead ? (
        <SignRead
          number={number}
          nickname={nickname}
          title={title}
          content={content}
          date={date}
          time={time}
        />
      ) : null}
    </div>
  );
};

export default SignList;
