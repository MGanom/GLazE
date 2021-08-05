import React, { useRef, useState } from "react";
import "./styles/Editor.scss";

const Editor = ({
  profile,
  updateProfile,
  isEdit,
  setIsEdit,
  imageUploader,
}) => {
  const { name, gender, email, message, imageURL } = profile;

  const formRef = useRef();
  const nameRef = useRef();
  const genderRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [image, setImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const onImageUpload = async (e) => {
    setIsUploading(true);
    const uploaded = await imageUploader.upload(e.target.files[0]);
    setIsUploading(false);
    setImage(uploaded.url);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const info = {
      name: nameRef.current.value || "",
      gender: genderRef.current.value || "",
      email: emailRef.current.value || "",
      message: messageRef.current.value || "",
      imageURL: image || imageURL,
    };
    updateProfile(info);
    setIsEdit(!isEdit);
  };

  return (
    <section className="profileEditor">
      <form className="profileForm" ref={formRef}>
        이름
        <input type="text" name="name" ref={nameRef} placeholder={name} />
        성별
        <select type="text" name="gender" ref={genderRef} placeholder={gender}>
          <option value="" selected disabled hidden>
            성별
          </option>
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
        <div>
          <input
            className="imageUploadBtn"
            type="file"
            accept="image/*"
            name="file"
            onChange={onImageUpload}
          />
        </div>
        {isUploading ? (
          <button className="profileUpdating" onClick={onSubmit} disabled>
            완료
          </button>
        ) : (
          <button className="profileUpdated" onClick={onSubmit}>
            완료
          </button>
        )}
      </form>
    </section>
  );
};

export default Editor;
