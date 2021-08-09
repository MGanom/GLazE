import React from "react";
import "./styles/SiteItem.scss";

const SiteItem = ({ logo, name, description, url }) => {
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
    </section>
  );
};

export default SiteItem;
