import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import Footer from "./components/footer/Footer";
import Lol from "./pages/lol/Lol";
import LostArk from "./pages/lostark/LostArk";
import Poe from "./pages/poe/Poe";
import Etc from "./pages/etc/Etc";
import Login from "./pages/login/Login";

function App({ youtube, auth }) {
  return (
    <div className="app">
      <div className="appContainer">
        <Router>
          <Switch>
            <Route exact path="/">
              <Login auth={auth} />
            </Route>
            <>
              <Header />
              <Route exact path="/main">
                <Main />
              </Route>
              <Route exact path="/lol">
                <Lol youtube={youtube} />
              </Route>
              <Route exact path="/lostark">
                <LostArk youtube={youtube} />
              </Route>
              <Route exact path="/poe">
                <Poe youtube={youtube} />
              </Route>
              <Route exact path="/etc">
                <Etc youtube={youtube} />
              </Route>
              <Footer />
            </>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
