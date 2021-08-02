import React from "react";
import VideoItem from "./VideoItem";
import "./VideoList.scss";

const VideoList = ({ videos, onClick }) => {
  return (
    <ul className="list">
      {videos.map((video) => {
        return <VideoItem key={video.id} video={video} onClick={onClick} />;
      })}
    </ul>
  );
};

export default VideoList;
