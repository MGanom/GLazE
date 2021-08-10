import React from "react";
import SiteItem from "./SiteItem";
import "./styles/SiteList.scss";

const SiteList = ({ database, sites }) => {
  return (
    <section className="siteList">
      {sites.map((site) => {
        return (
          <SiteItem
            database={database}
            key={site.id}
            id={site.bookmark}
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
