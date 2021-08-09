import React from "react";
import "./styles/SiteItem.scss";

const SiteItem = ({ logo, name, description, url }) => {
  return (
    <section className="siteDescription">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={url}
        className="siteUrl"
      >
        <img className="siteLogo" alt="logo" src={logo} />
      </a>
      <div className="siteName">{name}</div>
      <div className="siteDescription">{description}</div>
    </section>
  );
};

export default SiteItem;
