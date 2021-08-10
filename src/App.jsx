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
import {
  lolsites,
  lostarksites,
  poesites,
  othersites,
} from "../src/data/Sites";

function App({ youtube, auth, database, imageUploader }) {
  return (
    <div className="app">
      <div className="appContainer">
        <Router>
          <Switch>
            <Route exact path="/">
              <Login auth={auth} />
            </Route>
            <>
              <Header
                auth={auth}
                database={database}
                imageUploader={imageUploader}
              />
              <Route exact path="/main">
                <Main database={database} />
              </Route>
              <Route exact path="/lol">
                <Lol youtube={youtube} database={database} sites={lolsites} />
              </Route>
              <Route exact path="/lostark">
                <LostArk
                  youtube={youtube}
                  database={database}
                  sites={lostarksites}
                />
              </Route>
              <Route exact path="/poe">
                <Poe youtube={youtube} database={database} sites={poesites} />
              </Route>
              <Route exact path="/etc">
                <Etc youtube={youtube} database={database} sites={othersites} />
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
