import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import SignForm from "./SignForm";
import SignList from "./SignList";
import "./styles/GuestBook.scss";

const GuestBook = ({ database }) => {
  const history = useHistory();
  const user = history?.location?.state?.id;

  const [onWrite, setOnWrite] = useState(false);

  const writeSign = (e) => {
    setOnWrite(true);
  };

  return (
    <div className="guestbookContainer">
      <SignList />
      <button className="signCreateBtn" onClick={writeSign}>
        작성하기
      </button>
      {onWrite ? <SignForm /> : null}
    </div>
  );
};

export default GuestBook;
