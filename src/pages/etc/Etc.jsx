import React, { useEffect, useState } from "react";
import SiteList from "../../components/infosites/SiteList";
import VideoList from "../../components/youtube/VideoList";
import VideoPlayer from "../../components/youtube/VideoPlayer";
import "./Etc.scss";

const Etc = ({ database, youtube, sites }) => {
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
        {viewVideo ? <div className="listBlocker"></div> : null}
        <h1 className="youtubeSection">관련 영상 보기</h1>
        <VideoList videos={all} onClick={clickVideo} />
        {viewVideo ? (
          <>
            <VideoPlayer video={viewVideo} />
            <button className="videoCloseBtn" onClick={closeVideo}>
              X
            </button>
          </>
        ) : null}
      </section>
      <section className="infoSites">
        <h1 className="infoSection">관련 정보 사이트</h1>
        <SiteList database={database} sites={sites} />
      </section>
    </main>
  );
};

export default Etc;
