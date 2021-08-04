import React, { useEffect, useState } from "react";
import VideoList from "../../components/youtube/VideoList";
import "./Poe.scss";

const Poe = ({ youtube }) => {
  const [poe, setPoe] = useState([]);
  const [viewVideo, setViewVideo] = useState(null);

  const clickVideo = (video) => {
    setViewVideo(video);
  };

  useEffect(() => {
    const date = new Date();
    const published = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDay() - 13
    );

    youtube
      .search("패스오브엑자일", published)
      .then((videos) => setPoe(videos));
  }, [youtube]);
  return (
    <main className="poe">
      <section className="youtube">
        <VideoList videos={poe} onClick={clickVideo} />
      </section>
    </main>
  );
};

export default Poe;
