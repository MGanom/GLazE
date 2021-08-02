import React from "react";
import "./VideoItem.scss";

const VideoItem = ({ video, video: { snippet }, onClick }) => {
  return (
    <li className="container" onClick={() => onClick(video)}>
      <div className="video">
        <img
          className="thumbnail"
          src={snippet.thumbnails.medium.url}
          alt="thumbnail"
        />
      </div>
      <div className="videoInfo">
        <p className="title">{snippet.title}</p>
        <p className="channel">{snippet.channelTitle}</p>
      </div>
    </li>
  );
};

export default VideoItem;
