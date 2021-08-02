import React from "react";
import ReactDOM from "react-dom";
import "./styles/Reset.scss";
import "./index.scss";
import App from "./App";
import axios from "axios";
import Youtube from "./services/Youtube";

const youtubeClient = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
});
const youtube = new Youtube(youtubeClient);

ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById("root")
);
