import React from "react";
import Bookmark from "../bookmark/Bookmark";
import "./styles/SiteItem.scss";

const SiteItem = ({ database, id, logo, name, description, url }) => {
  return (
    <section className="siteItem">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={url}
        className="siteUrl"
      >
        <img className="siteLogo" alt="logo" src={logo} />
      </a>
      <div className="siteInfo">
        <div className="siteName">{name}</div>
        <div className="siteDescription">{description}</div>
      </div>
      <Bookmark database={database} id={id} name={name} url={url} />
    </section>
  );
};

export default SiteItem;
