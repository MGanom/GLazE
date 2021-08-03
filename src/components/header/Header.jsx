import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = (props) => {
  return (
    <header className="header">
      <Link to="/">
        <div className="title">나만의 게임 정보</div>
      </Link>
      <ul className="menus">
        <Link to="/lol">
          <li>리그오브레전드</li>
        </Link>
        <Link to="/lostark">
          <li>로스트아크</li>
        </Link>
        <Link to="/poe">
          <li>패스오브엑자일</li>
        </Link>
        <Link to="/etc">
          <li>기타</li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
