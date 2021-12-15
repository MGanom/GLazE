import React from "react";
import "./styles/SignForm.scss";

const SignForm = () => {
  return (
    <div className="signForm">
      <div className="signFormTitle">작성모달창제목</div>
      <div className="signFormContent">작성모달창내용</div>
      <button className="signFormSubmit">작성완료</button>
    </div>
  );
};

export default SignForm;
