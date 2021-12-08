import Modal from "../modal/Modal";
import "./Footer.scss";

const Footer = ({ database }) => {
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
      <div className="copyrightAndReport">
        <div className="copyright">
          &copy; Copyright 2021, MGanom. All Rights Reserved
        </div>
        <div className="report">
          <Modal
            usage={"건의사항 및 버그 제보"}
            description={
              "최대한 상세하게 적어주시면 문제 해결에 큰 도움이 됩니다."
            }
            database={database}
          />
        </div>
      </div>
    </main>
  );
};

export default Footer;
