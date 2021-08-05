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
        <input type="text" name="name" value={name} ref={nameRef} />
        <select type="text" name="gender" value={gender} ref={genderRef}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input type="text" name="email" value={email} ref={emailRef} />
        <input type="text" name="message" value={message} ref={messageRef} />
        <button className="profileUpdateBtn" onClick={onSubmit}>
          Update
        </button>
      </form>
    </section>
  );
};

export default Editor;
