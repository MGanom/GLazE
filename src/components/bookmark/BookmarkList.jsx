import React from "react";
import { useHistory } from "react-router-dom";

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
        className="bookmarkName"
      >
        {name}
      </a>
      {!id ? null : (
        <button className="bookmarkDeleteBtn" onClick={deleteBookmark}>
          bye
        </button>
      )}
    </section>
  );
};

export default BookmarkList;
