import Modal from "../modal/Modal";
import "./Footer.scss";

const Footer = ({ database }) => {
  return (
    <main className="footer">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/Moon-Ga"
        className="myGithub"
      >
        Moon-Ga's GitHub
      </a>
      <div className="copyrightAndReport">
        <div className="copyright">
          &copy; 2021. Moon-Ga all rights reserved.
        </div>
        <div className="report">
          <Modal
            usage={"건의사항 및 버그 제보"}
            description={`상세하게 적어주시면 문제 해결에 큰 도움이 됩니다.`}
            database={database}
          />
        </div>
      </div>
    </main>
  );
};

export default Footer;
