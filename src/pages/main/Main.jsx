import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import BookmarkList from "../../components/bookmark/BookmarkList";
import "./Main.scss";

const Main = ({ database }) => {
  const history = useHistory();
  const [bookmark, setBookmark] = useState({});

  useEffect(() => {
    if (history?.location?.state?.isGuest) {
      const guestSync = database.syncBookmark("guest", (mark) => {
        setBookmark(mark);
      });
      return () => guestSync();
    }
    const stopSync = database.syncBookmark(
      history?.location?.state?.id,
      (mark) => {
        setBookmark(mark);
      }
    );
    return () => stopSync();
  }, [
    database,
    history?.location?.state?.isGuest,
    history?.location?.state?.id,
    bookmark,
  ]);
  return (
    <main className="main">
      <section className="bookmark">즐겨찾기</section>
      {Object.keys(bookmark).map((key, idx) => {
        return (
          <BookmarkList
            database={database}
            key={idx}
            id={bookmark[key].id}
            name={bookmark[key].name}
            url={bookmark[key].url}
          />
        );
      })}

      <section className="mainAbout">뭐하는 곳 인가요?</section>
    </main>
  );
};

export default Main;
