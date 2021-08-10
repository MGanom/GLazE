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
      name: nameRef.current.value || name || "",
      gender: genderRef.current.value || gender || "",
      email: emailRef.current.value || email || "",
      message: messageRef.current.value || message || "",
      imageURL: image || imageURL || "",
    };
    updateProfile(info);
    setIsEdit(!isEdit);
  };

  return (
    <section className="profileEditor">
      <form className="profileForm" ref={formRef}>
        <div className="row1">
          <input
            className="name"
            type="text"
            name="name"
            ref={nameRef}
            placeholder={name || "이름"}
          />
          <select
            className="gender"
            type="text"
            name="gender"
            ref={genderRef}
            placeholder={gender}
          >
            <option value="" selected disabled hidden>
              성별
            </option>
            <option value="남자">남자</option>
            <option value="여자">여자</option>
            <option value="기타">기타</option>
          </select>
          <input
            className="email"
            type="text"
            name="email"
            ref={emailRef}
            placeholder={email || "이메일"}
          />
        </div>
        <div className="row2">
          <textarea
            className="selfIntro"
            type="text"
            name="message"
            ref={messageRef}
            placeholder={message || "자기소개"}
          />
        </div>
        <div className="row3">
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
