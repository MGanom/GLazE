import React, { useEffect, useState } from "react";
import Videolist from "../../components/youtube/VideoList";
import "./Main.scss";

const Main = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const [viewVideo, setViewVideo] = useState(null);

  useEffect(() => {
    youtube.mostPopular().then((videos) => setVideos(videos));
  }, [youtube]);

  const clickVideo = (video) => {
    setViewVideo(video);
  };

  return (
    <section className="main">
      <article className="youtube">
        <Videolist videos={videos} onClick={clickVideo} />
      </article>
    </section>
  );
};

export default Main;
