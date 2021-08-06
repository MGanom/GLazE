import React from "react";
import "./styles/VideoPlayer.scss";

const VideoPlayer = ({ video }) => {
  return (
    <section className="videoPlayer">
      <iframe
        title="player"
        className="player"
        id="ytplayer"
        type="text/html"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default VideoPlayer;
