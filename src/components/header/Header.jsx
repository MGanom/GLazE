import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Profile from "../profile/Profile";
import "./Header.scss";

const Header = ({ auth, database, imageUploader }) => {
  const history = useHistory();
  const historyState = history?.location?.state;
  const [userId, setUserId] = useState(historyState && historyState.id);
  const [select, setSelect] = useState("");

  const onLogout = useCallback(() => {
    auth.logout();
  }, [auth]);

  const goToPage = (e) => {
    history.push({
      pathname: "/" + e.target.id,
      state: historyState,
    });
    setSelect("/" + e.target.id);
  };

  useEffect(() => {
    if (!userId) {
      history.replace("/");
    }
    return;
  }, [history, userId]);

  useEffect(() => {
    auth.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.replace("/");
      }
    });
  }, [auth, history]);

  return (
    <header className="header">
      <div id="main" className="title">
        <img
          src="/images/title.png"
          className="titleImg"
          alt="title"
          onClick={goToPage}
        />
      </div>
      <div className="logout">
        <img
          src="images/logoutButton.png"
          className="logoutImg"
          alt="logout"
          onClick={onLogout}
        />
      </div>
      <div className="profileContainer">
        <Profile database={database} imageUploader={imageUploader} />
      </div>
      <ul className="menus">
        <li className="lolMenu">
          <img
            className={
              select === "/lol" || window.location.pathname === "/lol"
                ? "selected"
                : null
            }
            src="/images/lolLogo.png"
            alt="lol"
            id="lol"
            onClick={goToPage}
          />
        </li>
        <li className="lostarkMenu">
          <img
            className={
              select === "/lostark" || window.location.pathname === "/lostark"
                ? "selected"
                : null
            }
            src="/images/lostarkLogo.png"
            alt="lostark"
            id="lostark"
            onClick={goToPage}
          />
        </li>
        <li className="poeMenu">
          <img
            className={
              select === "/poe" || window.location.pathname === "/poe"
                ? "selected"
                : null
            }
            src="/images/poeLogo.png"
            alt="poe"
            id="poe"
            onClick={goToPage}
          />
        </li>
        <li className="etcMenu">
          <img
            className={
              select === "/etc" || window.location.pathname === "/etc"
                ? "selected"
                : null
            }
            src="/images/etcLogo.png"
            alt="etc"
            id="etc"
            onClick={goToPage}
          />
        </li>
      </ul>
    </header>
  );
};

export default Header;
