import "./styles/BookmarkList.scss";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const BookmarkList = ({ database, id, name, url }) => {
  const history = useHistory();

  const deleteBookmark = (e) => {
    e.preventDefault();
    database.removeBookmark(history?.location?.state?.id, id);
  };

  return (
    <section className="bookmarkItem">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={url}
        className="bookmarkLink"
      >
        <div className="bookmarkName">{name}</div>
        <div className="bookmarkURL">{url}</div>
      </a>
      {!history?.location?.state?.isGuest ? (
        <FontAwesomeIcon
          className="bookmarkDeleteBtn"
          icon={faStar}
          onClick={deleteBookmark}
        />
      ) : null}
    </section>
  );
};

export default BookmarkList;
