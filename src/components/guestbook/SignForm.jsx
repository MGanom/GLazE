import React, { useRef, useState, useEffect } from "react";
import "./styles/SignForm.scss";

const SignForm = ({ database, user, toggleWrite, bookClose }) => {
  const contentRef = useRef();
  const titleRef = useRef();
  const [nickname, setNickname] = useState("");
  const [signId, setSignId] = useState(0);
  const [titleLength, setTitleLength] = useState(0);
  const [contentLength, setContentLength] = useState(0);

  const titleCount = () => {
    setTitleLength(titleRef.current.value.length);
  };
  const contentCount = () => {
    setContentLength(contentRef.current.value.length);
  };

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
    const close = (e) => {
      if (e.code === "Escape") {
        toggleWrite();
      }
    };
    window.removeEventListener("keydown", bookClose);
    window.addEventListener("keydown", close);
    return () => {
      window.removeEventListener("keydown", close);
      window.addEventListener("keydown", bookClose);
    };
  }, [bookClose, toggleWrite]);

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
      <input
        className="signFormTitle"
        onChange={titleCount}
        ref={titleRef}
        placeholder="제목을 3자 이상 적어주세요."
      />
      <textarea
        className="signFormContent"
        onChange={contentCount}
        ref={contentRef}
        placeholder="내용을 5자 이상 적어주세요."
      />
      <div
        className={
          titleLength < 3 || contentLength < 5
            ? "signFormSubmit off"
            : "signFormSubmit"
        }
        onClick={signSubmit}
      >
        작성완료
      </div>
    </div>
  );
};

export default SignForm;
