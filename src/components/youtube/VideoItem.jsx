import React from "react";
import "./styles/VideoItem.scss";

const VideoItem = ({ video, video: { snippet }, onClick }) => {
  return (
    <li className="videoContainer" onClick={() => onClick(video)}>
      <img
        className="thumbnail"
        src={snippet.thumbnails.medium.url}
        alt="thumbnail"
      />
      <div className="videoInfo">
        <p className="title">{snippet.title}</p>
        <p className="channel">{snippet.channelTitle}</p>
      </div>
    </li>
  );
};

export default VideoItem;
