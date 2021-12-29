import React, { useCallback, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.scss";

const Login = ({ auth, database }) => {
  const history = useHistory();
  const moreInfoRef = useRef();
  const [whileLogin, setWhileLogin] = useState(false);

  const goToMain = useCallback(
    (userId, isGuest) => {
      history.push({
        pathname: "/main",
        state: { id: userId, isGuest: isGuest },
      });
    },
    [history]
  );

  const onLogin = (e) => {
    auth
      .login(e.target.alt) //
      .then(setWhileLogin(true))
      .then((data) => {
        database.createData(data.user.uid);
        goToMain(data.user.uid, data.user.isAnonymous);
      })
      .catch(() => {
        alert("로그인에 실패했습니다. 다시 시도해주세요.");
        setWhileLogin(false);
      });
  };

  const onGuestLogin = () => {
    auth.guestLogin().then(setWhileLogin(true)); //
  };

  const onMouseOver = () => {
    moreInfoRef.current.className = "moreFuncContent";
  };

  const onMouseLeave = () => {
    moreInfoRef.current.className = "invisible";
  };

  useEffect(() => {
    auth.onAuthChange((user) => {
      user && goToMain(user.uid, user.isAnonymous);
    });
  }, [auth, goToMain]);

  return (
    <>
      <div className="loginBackground" />
      <main className="login">
        <section className="loginContainer">
          <div className={whileLogin ? "loginBlocker" : "loginBlocker off"}>
            <div className="blockerContent">
              <div className="contentLetter">로</div>
              <div className="contentLetter">그</div>
              <div className="contentLetter">인&nbsp;</div>
              <div className="contentLetter">진</div>
              <div className="contentLetter">행&nbsp;</div>
              <div className="contentLetter">중</div>
              <div className="contentLetter">.</div>
              <div className="contentLetter">.</div>
              <div className="contentLetter">.</div>
            </div>
          </div>
          <div className="loginDescription">
            <h1>이용을 위해 로그인하거나 게스트로 진행하세요.</h1>
            <h2>
              Google 혹은 Github 계정으로 <br /> 로그인 시{" "}
              <span
                className="moreFunc"
                onMouseOver={onMouseOver}
                onMouseLeave={onMouseLeave}
              >
                추가적인 기능
                <div className="invisible" ref={moreInfoRef}>
                  프로필 설정, 즐겨찾기, 건의사항 및 버그 제보, 방명록
                </div>
              </span>
              을 사용할 수 있습니다.
            </h2>
          </div>
          <ul className="authList">
            <li className="googleLogin">
              <img
                src="/images/googleIcon.png"
                alt="Google"
                onClick={onLogin}
              />
            </li>
            <li className="githubLogin">
              <img
                src="/images/githubIcon.svg"
                alt="Github"
                onClick={onLogin}
              />
            </li>
            <li className="guestLogin">
              <img
                src="/images/guestIcon.svg"
                alt="Guest"
                onClick={onGuestLogin}
              />
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default Login;
