import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import BookmarkList from "../../components/bookmark/BookmarkList";
import "./Main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Main = ({ database }) => {
  const history = useHistory();
  const [bookmark, setBookmark] = useState({});
  const URLRef = useRef();
  const nameRef = useRef();
  const dataid = database.bookmarkId(history?.location?.state?.id);

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
  ]);

  const onSubmit = (e) => {
    e.preventDefault();
    const url =
      URLRef.current.value.indexOf("http") === 0
        ? URLRef.current.value
        : "http://" + URLRef.current.value;
    const mark = {
      id: dataid,
      name: nameRef.current.value,
      url: url,
    };
    database.saveBookmark(history?.location?.state?.id, mark);
    nameRef.current.value = "";
    URLRef.current.value = "";
  };

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
          <h1 className="bookmarkTitle">
            즐겨찾기{" "}
            {history.location.state.isGuest === true ? "(사용 불가)" : null}
          </h1>
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
        <form className="bookmarkLinkAdd">
          <input
            className="bookmarkLinkName"
            type="text"
            name="name"
            ref={nameRef}
            readOnly={history?.location?.state?.isGuest ? true : false}
            placeholder={
              history?.location?.state?.isGuest
                ? "로그인이 필요합니다."
                : "링크 이름"
            }
          />
          <input
            className="bookmarkURLInput"
            type="text"
            name="url"
            ref={URLRef}
            readOnly={history?.location?.state?.isGuest ? true : false}
            placeholder={
              history?.location?.state?.isGuest
                ? "로그인이 필요합니다."
                : "링크 주소를 입력하세요."
            }
          />
          <button
            className="bookmarkLinkSubmit"
            onClick={onSubmit}
            disabled={history?.location?.state?.isGuest ? true : false}
          >
            추가
          </button>
        </form>
        <div className="bookmarkHowto">
          <h1 className="bookmarkHowtoTitle">사용방법</h1>
          <h2 className="bookmarkHowtoContent">
            1. 즐겨찾기 목록 하단에 자신이 등록하고 싶은 링크의 이름과 주소를
            입력하고 추가 버튼을 누르면 즐겨찾기가 등록됩니다. <br />
            &nbsp;&nbsp;&nbsp;&nbsp;* 원활한 이용을 위해 반드시 정확한 주소를
            입력해야 합니다. <br />
            2. 각 카테고리 내의 여러가지 항목들 중{" "}
            <FontAwesomeIcon color="rgb(100, 100, 100)" icon={faStar} />이
            있다면 이를 클릭하여 메인페이지의 즐겨찾기 목록에 추가할 수 있으며,{" "}
            추가된 항목은&nbsp;
            <FontAwesomeIcon
              color="rgb(255, 215, 0)"
              filter="drop-shadow(0 0 0.063rem rgb(100, 100, 100)"
              icon={faStar}
            />
            로 표시됩니다. <br />
            3.등록된 즐겨찾기는{" "}
            <FontAwesomeIcon
              color="rgb(255, 215, 0)"
              filter="drop-shadow(0 0 0.063rem rgb(100, 100, 100)"
              icon={faStar}
            />
            를 누를 시 즐겨찾기가 해제되어 목록에서 사라집니다. <br />
            <br />
            <div style={{ color: "blue" }}>
              ※ 게스트로 로그인 시 즐겨찾기 기능을 사용할 수 없습니다.
            </div>
          </h2>
        </div>
      </section>
    </main>
  );
};

export default Main;
