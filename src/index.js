import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "./styles/Reset.scss";
import App from "./App";
import axios from "axios";
import Youtube from "./services/Youtube";
import Auth from "./services/Auth";
import Database from "./services/Database";
import ImageUploader from "./services/ImageUploader";

const auth = new Auth();

const database = new Database();

const youtubeClient = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
});
const youtube = new Youtube(youtubeClient);

const imageUploader = new ImageUploader();

ReactDOM.render(
  <React.StrictMode>
    <App
      auth={auth}
      database={database}
      youtube={youtube}
      imageUploader={imageUploader}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
