import React, { useEffect, useState } from "react";
import "./styles/Bookmark.scss";
import { useHistory } from "react-router-dom";

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
    <>
      {!isMarked ? (
        <div className="bookmarkBtn" onClick={updateBookmark}>
          ADD
        </div>
      ) : (
        <div className="bookmarkBtn" onClick={deleteBookmark}>
          DELETE
        </div>
      )}
    </>
  );
};

export default Bookmark;
