import React, { useEffect, useState } from "react";
import VideoList from "../../components/youtube/VideoList";
import VideoPlayer from "../../components/youtube/VideoPlayer";
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

  const closeVideo = () => {
    setViewVideo(null);
  };
  return (
    <main className="etc">
      <section className="youtube">
        <h1 className="youtubeSection">관련 영상 보기</h1>
        <VideoList videos={all} onClick={clickVideo} />
        {viewVideo ? (
          <>
            {" "}
            <VideoPlayer video={viewVideo} />{" "}
            <button className="videoCloseBtn" onClick={closeVideo}>
              X
            </button>
          </>
        ) : null}
      </section>
    </main>
  );
};

export default Etc;
