import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <main className="footer">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/MGanom"
        className="myGithub"
      >
        MGanom's Github
      </a>
      <div className="copyright">
        &copy; Copyright 2021, MGanom. All Rights Reserved
      </div>
    </main>
  );
};

export default Footer;
