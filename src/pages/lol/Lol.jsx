import React, { useEffect, useState } from "react";
import VideoList from "../../components/youtube/VideoList";
import "./Lol.scss";

const Lol = ({ youtube }) => {
  const [lol, setLol] = useState([]);
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
      .search("리그오브레전드", published)
      .then((videos) => setLol(videos));
  }, [youtube]);
  return (
    <main className="lol">
      <section className="youtube">
        <VideoList videos={lol} onClick={clickVideo} />
      </section>
    </main>
  );
};

export default Lol;
