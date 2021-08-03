import React, { useEffect, useState } from "react";
import VideoList from "../../components/youtube/VideoList";
import "./Etc.scss";

const Etc = ({ youtube }) => {
  const [all, setAll] = useState([]);
  const [viewVideo, setViewVideo] = useState(null);

  useEffect(() => {
    youtube.mostPopular().then((videos) => setAll(videos));
  }, [youtube]);

  const clickVideo = (video) => {
    setViewVideo(video);
  };

  return (
    <section className="etc">
      <article className="youtube">
        <VideoList videos={all} onClick={clickVideo} />
      </article>
    </section>
  );
};

export default Etc;
