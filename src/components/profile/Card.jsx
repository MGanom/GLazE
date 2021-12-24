import { useHistory } from "react-router-dom";
import "./styles/Card.scss";

const DEFAULT_IMAGE = "/images/guestIcon.svg";
const Card = ({ profile }) => {
  const history = useHistory();
  const { name, gender, email, message, imageURL } = profile;
  const url = imageURL || DEFAULT_IMAGE;

  const openImg = (e) => {
    window.open(e.target.currentSrc, "_blank", "width=300px,height=300px");
  };

  return (
    <div className="profileCard">
      <img
        className={
          history?.location?.state?.isGuest ? "profileImg" : "profileImg click"
        }
        src={url}
        alt="profileImg"
        title="사진 보기"
        onClick={history?.location?.state?.isGuest === true ? null : openImg}
      />
      <div className="profileInfo">
        <h1 className="profileName">{name}</h1>
        <p className="profileGender">{gender}</p>
        <p className="profileEmail">{email}</p>
        <p className="profileMessage" title={message}>
          {message}
        </p>
      </div>
    </div>
  );
};

export default Card;
