import React from "react";
import SiteItem from "./SiteItem";
import "./styles/SiteList.scss";

const SiteList = ({ sites }) => {
  return (
    <section className="siteList">
      {sites.map((site) => {
        return (
          <SiteItem
            key={site.id}
            logo={site.logo}
            name={site.name}
            description={site.description}
            url={site.url}
          />
        );
      })}
    </section>
  );
};

export default SiteList;
