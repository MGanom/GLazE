import React, { useRef, useState, useEffect } from "react";
import "./styles/SignForm.scss";

const SignForm = ({ database, user, toggleWrite }) => {
  const contentRef = useRef();
  const titleRef = useRef();
  const [nickname, setNickname] = useState("");
  const [signId, setSignId] = useState(0);

  const signSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    let hours;
    let minutes;
    let seconds;
    if (date.getHours() < 10) {
      hours = "0" + date.getHours();
    } else {
      hours = date.getHours();
    }
    if (date.getMinutes() < 10) {
      minutes = "0" + date.getMinutes();
    } else {
      minutes = date.getMinutes();
    }
    if (date.getSeconds() < 10) {
      seconds = "0" + date.getSeconds();
    } else {
      seconds = date.getSeconds();
    }
    const sign = {
      date:
        String(date.getFullYear()).slice(2) +
        "." +
        (date.getMonth() + 1) +
        "." +
        date.getDate(),
      time: hours + ":" + minutes + ":" + seconds,
      signId: user,
      id: signId,
      title: titleRef.current.value,
      nickname: nickname,
      content: contentRef.current.value,
    };
    if (sign.title.length < 3) {
      alert("제목을 3자 이상 적어주세요.");
    } else if (sign.content.length < 5) {
      alert("내용을 5자 이상 적어주세요.");
    } else {
      database.saveSign(signId, sign);
      toggleWrite();
    }
  };

  useEffect(() => {
    database.getNickname(user, setNickname);
  }, [database, user, setNickname]);

  useEffect(() => {
    database.getId(setSignId, "guestbookDB");
  }, [database]);

  return (
    <div className="signForm">
      <div className="signFormCancelBtn" onClick={toggleWrite}>
        돌아가기
      </div>
      <div className="signFormDesc">방명록 작성</div>
      <input className="signFormTitle" ref={titleRef} placeholder="제목" />
      <textarea
        className="signFormContent"
        ref={contentRef}
        placeholder="내용"
      />
      <div className="signFormSubmit" onClick={signSubmit}>
        작성완료
      </div>
    </div>
  );
};

export default SignForm;
