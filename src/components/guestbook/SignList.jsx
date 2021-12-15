import React, { useState } from "react";
import SignRead from "./SignRead";
import "./styles/SignList.scss";

const SignList = () => {
  const [onRead, setOnRead] = useState(false);

  const readSign = () => {
    setOnRead(true);
  };

  const deleteSign = (e) => {};

  return (
    <div className="guestbookList">
      <div className="signName">작성자 이름</div>
      <div className="signTitle" onClick={readSign}>
        제목
      </div>
      {onRead ? <SignRead /> : null}
      <button className="signDeleteBtn" onClick={deleteSign}>
        삭제
      </button>
    </div>
  );
};

export default SignList;
