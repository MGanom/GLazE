import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react/cjs/react.development";
import SignForm from "./SignForm";
import SignList from "./SignList";
import "./styles/GuestBook.scss";

const GuestBook = ({ database }) => {
  const history = useHistory();
  const user = history?.location?.state?.id;
  const [signData, setSignData] = useState([]);
  const [onWrite, setOnWrite] = useState(false);
  const [isOpen, setIsOpen] = useState();

  const openGuestBook = () => {
    setIsOpen(true);
    document.querySelector("body").classList.add("noScroll");
  };

  const closeGuestBook = () => {
    document.querySelector("body").classList.remove("noScroll");
    if (onWrite !== true) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    database.syncGuestBook(setSignData);
  }, [database]);

  const toggleWrite = (e) => {
    setOnWrite(!onWrite);
  };

  return (
    <div className="guestBook">
      <button className="guestBookSwtich" onClick={openGuestBook}>
        방명록
      </button>
      {isOpen ? (
        <>
          <div className="guestBookBackground" onClick={closeGuestBook}></div>
          <div className="guestBookContainer">
            <div className="guestBookCloseBtn" onClick={closeGuestBook}>
              닫기
            </div>
            <div className="guestBookTitle">방명록</div>
            <div className="signListContainer">
              {signData.map((sign) => {
                return (
                  <SignList
                    key={sign.id}
                    number={sign.id}
                    nickname={sign.nickname}
                    title={sign.title}
                    content={sign.content}
                    date={sign.date}
                    time={sign.time}
                  />
                );
              })}
            </div>
            <button className="signCreateBtn" onClick={toggleWrite}>
              작성하기
            </button>
            {onWrite ? (
              <>
                <div className="signFormBackground"></div>
                <div className="signFormContainer">
                  <SignForm
                    database={database}
                    user={user}
                    toggleWrite={toggleWrite}
                  />
                </div>
              </>
            ) : null}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default GuestBook;
