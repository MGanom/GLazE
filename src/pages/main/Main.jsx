import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import BookmarkList from "../../components/bookmark/BookmarkList";
import "./Main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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
      <section className="mainAbout">
        <h1 className="mainAboutTitle">뭐하는 곳 인가요?</h1>
        <h2 className="mainAboutContent">
          GLazE는 Game Lazily & Easily의 약자로, 각종 게임에 관련된 유용한
          정보들을 빠르고 쉽게 접근할 수 있게 하기 위해 만들어졌습니다.
          <br />
          단순히 관련 사이트로만 연결하는 것이 아니라, GLazE에서 추천하는 유용한
          게시물로 바로 이동하여 사용자가 자신에게 필요한 정보를 검색하는
          과정에서 발생하는 피로도를 낮추고자 합니다. <br />
          현재 대표적인 카테고리로 리그오브레전드, 로스트아크, 그리고
          패스오브엑자일이 있으며, 이 외의 잡다한 정보를 담은 기타 카테고리가
          있습니다.
        </h2>
      </section>

      <section className="bookmark">
        <div className="bookmarkList">
          <h1 className="bookmarkTitle">즐겨찾기</h1>
          <div className="bookmarkItems">
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
          </div>
        </div>
        <div className="bookmarkHowto">
          <h1 className="bookmarkHowtoTitle">사용방법</h1>
          <h2 className="bookmarkHowtoContent">
            각 카테고리 내의 여러가지 항목들 중{" "}
            <FontAwesomeIcon color="rgb(100, 100, 100)" icon={faStar} />이
            있다면 이를 클릭하여 메인페이지의 즐겨찾기에 추가할 수 있습니다.{" "}
            추가된 항목은&nbsp;
            <FontAwesomeIcon
              color="rgb(255, 215, 0)"
              filter="drop-shadow(0 0 1px rgb(100, 100, 100)"
              icon={faStar}
            />
            로 표시되며, 메인페이지에서{" "}
            <FontAwesomeIcon
              color="rgb(255, 215, 0)"
              filter="drop-shadow(0 0 1px rgb(100, 100, 100)"
              icon={faStar}
            />
            를 누를 시 즐겨찾기가 해제되어 사라집니다.
          </h2>
        </div>
      </section>
    </main>
  );
};

export default Main;
