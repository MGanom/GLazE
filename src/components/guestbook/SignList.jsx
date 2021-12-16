import React, { useState } from "react";
import SignRead from "./SignRead";
import "./styles/SignList.scss";

const SignList = ({ number, nickname, title }) => {
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
      {onRead ? <SignRead /> : null}
    </div>
  );
};

export default SignList;
