import React, { useEffect, useState } from "react";
import "./Main.scss";

const Main = ({ database }) => {
  const [bookmark, setBookmark] = useState({});

  return (
    <main className="main">
      <section className="bookmark">즐겨찾기</section>
      <section className="mainAbout">뭐하는 곳 인가요?</section>
    </main>
  );
};

export default Main;
