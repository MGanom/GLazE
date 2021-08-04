import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Header.scss";

const Header = ({ auth }) => {
  const history = useHistory();
  const historyState = history?.location?.state;
  const [userId, setUserId] = useState(historyState && historyState.id);

  const onLogout = () => {
    auth.logout();
  };

  useEffect(() => {
    if (!userId) {
      history.replace("/");
    }
  });

  useEffect(() => {
    auth.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push("/");
      }
    });
  });

  const goToPage = (e) => {
    history.push({
      pathname: "/" + e.target.id,
      state: { id: historyState.id },
    });
  };

  return (
    <header className="header">
      <div id="main" className="title" onClick={goToPage}>
        <img src="../../images/title.png" className="titleImg" alt="title" />
      </div>
      <div className="logout" onClick={onLogout}>
        <img
          src="../../images/logoutButton.png"
          className="logoutImg"
          alt="logout"
        />
      </div>

      <ul className="menus">
        <li>
          <img
            src="../../images/lolLogo.png"
            alt="lol"
            id="lol"
            onClick={goToPage}
          />
        </li>
        <li>
          <img
            src="../../images/lostarkLogo.png"
            alt="lostark"
            id="lostark"
            onClick={goToPage}
          />
        </li>
        <li>
          <img
            src="../../images/poeLogo.png"
            alt="poe"
            id="poe"
            onClick={goToPage}
          />
        </li>
        <li>
          <img
            src="../../images/etcLogo.png"
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
