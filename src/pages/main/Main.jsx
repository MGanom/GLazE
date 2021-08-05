import React, { useEffect, useState } from "react";
import Profile from "../../components/profile/Profile";
import "./Main.scss";

const Main = ({ database }) => {
  return (
    <main className="main">
      <Profile database={database} />
      <section className="bookmark">즐겨찾기</section>
    </main>
  );
};

export default Main;
