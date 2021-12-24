import React, { useRef, useState, useEffect } from "react";
import LikeButton from "../likebutton/LikeButton";
import Card from "../profile/Card";
import "./styles/SignRead.scss";

const SignRead = ({
  database,
  state,
  user,
  number,
  nickname,
  title,
  content,
  date,
  time,
  toggleSign,
}) => {
  const idRef = useRef();
  const [readProfile, setReadProfile] = useState(false);
  const [profile, setProfile] = useState({});

  const deleteSign = (e) => {
    e.preventDefault();
    database.removeSign(idRef.current.innerText, user, toggleSign);
  };

  const toggleProfile = () => {
    setReadProfile(!readProfile);
  };

  useEffect(() => {
    database.signProfile(number, setProfile);
  }, [database, number]);

  return (
    <>
      <div className="signReadBackground" onClick={toggleSign}></div>
      <div className="signReadContainer">
        <div className="readCancelBtn" onClick={toggleSign}>
          돌아가기
        </div>
        <div className="readInfo">
          <div className="readNumber" ref={idRef}>
            {number}
          </div>
          <div
            className="readNickname"
            onClick={toggleProfile}
            title={`${nickname}의 프로필 카드 보기`}
          >
            {nickname}
          </div>
          <div className={readProfile ? "signProfileOn" : "signProfileOff"}>
            {readProfile ? (
              <>
                <Card profile={profile} />
                <div className="profileCloseBtn" onClick={toggleProfile}>
                  닫기
                </div>
              </>
            ) : null}
          </div>

          <div className="readDate">
            {date}, {time.slice(0, 5)}
          </div>
        </div>
        <div className="readTitle">{title}</div>
        <div className="readContent">{content}</div>
        <div className="funcContainer">
          <div className="readLikeBtn">
            <LikeButton
              database={database}
              state={state}
              user={user}
              number={number}
              nickname={nickname}
            />
          </div>
          <div className="signDeleteBtn" onClick={deleteSign}>
            삭제
          </div>
        </div>
      </div>
    </>
  );
};

export default SignRead;
