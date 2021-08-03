import React, { useEffect, useState } from "react";
import Videolist from "../../components/youtube/VideoList";
import "./Main.scss";

const Main = ({ youtube }) => {
  const [all, setAll] = useState([]);
  const [lol, setLol] = useState([]);
  const [lostArk, setLostArk] = useState([]);
  const [poe, setPoe] = useState([]);
  const [viewVideo, setViewVideo] = useState(null);

  useEffect(() => {
    const date = new Date();
    const published = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDay() - 13
    );
    youtube.mostPopular().then((videos) => setAll(videos));
    youtube
      .search("리그오브레전드", published)
      .then((videos) => setLol(videos));
    youtube
      .search("로스트아크", published)
      .then((videos) => setLostArk(videos));
    youtube
      .search("패스오브엑자일", published)
      .then((videos) => setPoe(videos));
    console.log(published);
  }, [youtube]);

  const clickVideo = (video) => {
    setViewVideo(video);
  };

  return (
    <section className="main">
      <article className="youtube">
        <Videolist videos={all} onClick={clickVideo} />
        <Videolist videos={lol} onClick={clickVideo} />
        <Videolist videos={lostArk} onClick={clickVideo} />
        <Videolist videos={poe} onClick={clickVideo} />
      </article>
    </section>
  );
};

export default Main;
