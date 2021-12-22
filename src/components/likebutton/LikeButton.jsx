import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import "./LikeButton.scss";

const LikeButton = ({ database, state, user, number, nickname }) => {
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [likeImg, setLikeImg] = useState("/images/heartOff.svg");

  const addLikeCount = () => {
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
    const clicker = {
      date:
        String(date.getFullYear()).slice(2) +
        "." +
        (date.getMonth() + 1) +
        "." +
        date.getDate(),
      time: hours + ":" + minutes + ":" + seconds,
      nickname: nickname,
    };
    database.addLikeCount(`guestbook/${number}`, user, clicker);
    // setIsLiked(true);
    setLikeImg("/images/heartOn.svg");
  };
  const subLikeCount = () => {
    database.subLikeCount(`guestbook/${number}`, user);
    // setIsLiked(false);
    setLikeImg("/images/heartOff.svg");
  };

  useEffect(() => {
    database.syncLikeCount(`guestbook/${number}`, setLikeCount);
  }, [database, number]);

  useEffect(() => {
    database.checkIsLiked(`guestbook/${number}`, user, setIsLiked);
  }, [database, number, user]);

  return (
    <div
      className="likeBtnContainer"
      onClick={isLiked ? subLikeCount : addLikeCount}
    >
      <img
        className={isLiked ? "likeBtnImgOn" : "likeBtnImgOff"}
        src={likeImg}
        alt="likeBtn"
      />
      <div className="likeBtnCount">&nbsp;{likeCount}</div>
    </div>
  );
};

export default LikeButton;
