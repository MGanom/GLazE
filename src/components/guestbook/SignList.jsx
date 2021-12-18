import React, { useState } from "react";
import SignRead from "./SignRead";
import "./styles/SignList.scss";

const SignList = ({
  database,
  user,
  number,
  nickname,
  title,
  content,
  date,
  time,
}) => {
  const [onRead, setOnRead] = useState(false);

  const toggleSign = (e) => {
    setOnRead(!onRead);
  };

  return (
    <div className="guestBookList">
      <div className="signNumber">{number}</div>
      <div className="signName">{nickname}</div>
      <div className="signTitle" onClick={toggleSign}>
        {title}
      </div>
      <div className="signDate">{date}</div>
      {onRead ? (
        <SignRead
          database={database}
          user={user}
          number={number}
          nickname={nickname}
          title={title}
          content={content}
          date={date}
          time={time}
          toggleSign={toggleSign}
        />
      ) : null}
    </div>
  );
};

export default SignList;
