import React, { useRef, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import "./styles/SignForm.scss";

const SignForm = ({ database, user }) => {
  const date = new Date();
  console.log(date.getFullYear(), date.getMonth() + 1, date.getDate());
  const contentRef = useRef();
  const titleRef = useRef();
  const [nickname, setNickname] = useState("");

  const signSubmit = (e) => {
    e.preventDefault();
    const sign = {
      signId: user,
      id: database.signId(),
      title: titleRef.current.value,
      nickname: nickname,
      content: contentRef.current.value,
    };
    database.saveSign(sign.id, sign);
  };

  useEffect(() => {
    database.reporterNick(user, setNickname);
  }, [database, user, setNickname]);

  return (
    <div className="signForm">
      <input className="signFormTitle" ref={titleRef} />
      <textarea className="signFormContent" ref={contentRef} />
      <button className="signFormSubmit" onClick={signSubmit}>
        작성완료
      </button>
    </div>
  );
};

export default SignForm;
