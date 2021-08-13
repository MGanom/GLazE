import React, { useEffect, useState } from "react";
import SiteList from "../../components/infosites/SiteList";
import VideoList from "../../components/youtube/VideoList";
import VideoPlayer from "../../components/youtube/VideoPlayer";
import "./Lol.scss";

const Lol = ({ database, youtube, sites }) => {
  const [lol, setLol] = useState([]);
  const [viewVideo, setViewVideo] = useState(null);

  const clickVideo = (video) => {
    setViewVideo(video);
  };

  const closeVideo = () => {
    setViewVideo(null);
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
        <h1 className="youtubeSection">관련 영상 보기</h1>
        <VideoList videos={lol} onClick={clickVideo} />
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
      <section className="infoSites">
        <h1 className="infoSection">관련 정보 사이트</h1>
        <SiteList database={database} sites={sites} />
      </section>
    </main>
  );
};

export default Lol;
