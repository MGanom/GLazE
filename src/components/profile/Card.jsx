import "./styles/Card.scss";

const DEFAULT_IMAGE = "/images/guestIcon.svg";
const Card = ({ profile }) => {
  const { name, gender, email, message, imageURL } = profile;
  const url = imageURL || DEFAULT_IMAGE;

  return (
    <div className="profileCard">
      <img className="profileImg" src={url} alt="profileImg" />
      <div className="profileInfo">
        <h1 className="profileName">{name}</h1>
        <p className="profileGender">{gender}</p>
        <p className="profileEmail">{email}</p>
        <p className="profileMessage">{message}</p>
      </div>
    </div>
  );
};

export default Card;
