import React, { useEffect, useState } from "react";
import "./styles/Bookmark.scss";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Bookmark = ({ database, id, name, url }) => {
  const history = useHistory();
  const [isMarked, setIsMarked] = useState(false);

  useEffect(() => {
    database.checkBookmark(history?.location?.state?.id, id, setIsMarked);
  }, [database, history?.location?.state?.id, id]);

  const updateBookmark = (e) => {
    e.preventDefault();
    const mark = {
      id: id,
      name: name,
      url: url,
    };
    database.saveBookmark(history?.location?.state?.id, mark);
    setIsMarked(true);
  };

  const deleteBookmark = (e) => {
    e.preventDefault();
    database.removeBookmark(history?.location?.state?.id, id);
    setIsMarked(false);
  };

  return (
    <div className="bookmarkToggleBtn">
      {!isMarked ? (
        <FontAwesomeIcon
          className="bookmarkBtnOff"
          icon={faStar}
          onClick={updateBookmark}
        />
      ) : (
        <FontAwesomeIcon
          className="bookmarkBtnOn"
          icon={faStar}
          onClick={deleteBookmark}
        />
      )}
    </div>
  );
};

export default Bookmark;
