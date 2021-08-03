import React, { useEffect, useState } from "react";
import VideoList from "../../components/youtube/VideoList";
import "./LostArk.scss";

const LostArk = ({ youtube }) => {
  const [lostArk, setLostArk] = useState([]);
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
      .search("로스트아크", published)
      .then((videos) => setLostArk(videos));
  }, [youtube]);

  return (
    <section className="lostark">
      <article className="youtube">
        <VideoList videos={lostArk} onClick={clickVideo} />
      </article>
    </section>
  );
};

export default LostArk;
