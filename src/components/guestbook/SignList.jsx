import React, { useCallback, useState } from "react";
import SignRead from "./SignRead";
import "./styles/SignList.scss";

const SignList = ({
  database,
  state,
  user,
  number,
  nickname,
  title,
  content,
  date,
  time,
  bookClose,
}) => {
  const [onRead, setOnRead] = useState(false);

  const toggleSign = useCallback(() => {
    setOnRead(!onRead);
  }, [onRead]);

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
          state={state}
          user={user}
          number={number}
          nickname={nickname}
          title={title}
          content={content}
          date={date}
          time={time}
          toggleSign={toggleSign}
          bookClose={bookClose}
        />
      ) : null}
    </div>
  );
};

export default SignList;
