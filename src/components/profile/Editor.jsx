import React, { useRef } from "react";
import "./styles/Editor.scss";

const Editor = ({ profile, updateProfile }) => {
  const { name, gender, email, message, fileName } = profile;

  const formRef = useRef();
  const nameRef = useRef();
  const genderRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const info = {
      name: nameRef.current.value || "",
      gender: genderRef.current.value || "",
      email: emailRef.current.value || "",
      message: messageRef.current.value || "",
    };
    formRef.current.reset();
    updateProfile(info);
  };

  return (
    <section className="profileEditor">
      <form className="profileForm" ref={formRef}>
        이름
        <input type="text" name="name" ref={nameRef} placeholder={name} />
        성별
        <select type="text" name="gender" ref={genderRef} placeholder={gender}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        이메일
        <input type="text" name="email" ref={emailRef} placeholder={email} />
        자기소개
        <input
          type="text"
          name="message"
          ref={messageRef}
          placeholder={message}
        />
        <button className="profileUpdateBtn" onClick={onSubmit}>
          완료
        </button>
      </form>
    </section>
  );
};

export default Editor;
