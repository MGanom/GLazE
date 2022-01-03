import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import SignForm from "./SignForm";
import SignList from "./SignList";
import "./styles/GuestBook.scss";

const GuestBook = ({ database }) => {
  const history = useHistory();
  const state = history?.location?.state;
  const [signData, setSignData] = useState({});
  const [onWrite, setOnWrite] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const bookClose = useCallback((e) => {
    if (setIsOpen && e.code === "Escape") {
      document.querySelector("body").classList.remove("noScroll");
      setIsOpen(false);
    }
  }, []);

  const openGuestBook = () => {
    setIsOpen(true);
    document.querySelector("body").classList.add("noScroll");
  };

  const closeGuestBook = () => {
    if (onWrite !== true) {
      document.querySelector("body").classList.remove("noScroll");
      setIsOpen(false);
    }
  };

  const toggleWrite = () => {
    setOnWrite(!onWrite);
  };

  useEffect(() => {
    window.addEventListener("keydown", bookClose);
    return () => {
      window.removeEventListener("keydown", bookClose);
    };
  }, [bookClose]);

  useEffect(() => {
    database.syncGuestBook(setSignData);
  }, [database]);

  return (
    <div className="guestBook">
      <div className="guestBookSwitch" onClick={openGuestBook}>
        방명록
      </div>
      {isOpen ? (
        <>
          <div className="guestBookBackground" onClick={closeGuestBook}></div>
          <div className="guestBookContainer">
            <div className="guestBookCloseBtn" onClick={closeGuestBook}>
              닫기
            </div>
            <div className="guestBookTitle">방명록</div>
            <div className="signListContainer">
              {Object.keys(signData).map((key, idx) => {
                return (
                  <SignList
                    database={database}
                    state={state}
                    user={state.id}
                    key={idx}
                    number={signData[key].id}
                    nickname={signData[key].nickname}
                    title={signData[key].title}
                    content={signData[key].content}
                    date={signData[key].date}
                    time={signData[key].time}
                    bookClose={bookClose}
                  />
                );
              })}
            </div>
            <div
              className={state.isGuest ? "signCreateBtn off" : "signCreateBtn"}
              onClick={state.isGuest ? null : toggleWrite}
            >
              작성하기
            </div>
            {onWrite ? (
              <>
                <div className="signFormBackground"></div>
                <div className="signFormContainer">
                  <SignForm
                    database={database}
                    user={state.id}
                    toggleWrite={toggleWrite}
                    bookClose={bookClose}
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
