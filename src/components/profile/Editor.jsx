import React, { useRef, useState } from "react";
import "./styles/Editor.scss";

const Editor = ({
  userId,
  profile,
  updateProfile,
  resetProfile,
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
  const labelRef = useRef();
  const [image, setImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const onImageUpload = async (e) => {
    setIsUploading(true);
    if (e.target.files[0] && e.target.files[0].type.indexOf("image") === 0) {
      const uploaded = await imageUploader.upload(e.target.files[0]);
      labelRef.current.innerText = e.target.files[0].name;
      setImage(uploaded.url);
    } else if (
      e.target.files[0] &&
      e.target.files[0].type.indexOf("image") !== 0
    ) {
      alert("jpg, jpeg, png, 혹은 bmp 파일만 선택할 수 있습니다.");
      labelRef.current.innerText =
        "잘못된 형식의 파일입니다. 다시 선택해주세요.";
    }
    setIsUploading(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const info = {
      name: nameRef.current.value
        ? nameRef.current.value + "(" + userId.slice(0, 6) + ")"
        : null || name || "이름",
      gender: genderRef.current.value || gender || "성별",
      email: emailRef.current.value || email || "이메일",
      message: messageRef.current.value || message || "메시지",
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
          <select className="gender" type="text" name="gender" ref={genderRef}>
            <option value="">성별</option>
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
            id="imageUpload"
            type="file"
            accept=".jpg,.jpeg,.png,.bmp"
            name="file"
            onChange={onImageUpload}
          />
          <label
            htmlFor="imageUpload"
            className="imageUploadBtn"
            ref={labelRef}
          >
            프로필 사진 선택
          </label>
        </div>
        <div className="row4">
          {isUploading ? (
            <>
              <div className="profileUpdating">처리 중..</div>
              <div className="resetBtnOff">초기화</div>
            </>
          ) : (
            <>
              <div className="profileUpdated" onClick={onSubmit}>
                완료
              </div>
              <div className="resetBtn" onClick={resetProfile}>
                초기화
              </div>
            </>
          )}
        </div>
      </form>
    </section>
  );
};

export default Editor;
