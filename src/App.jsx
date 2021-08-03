import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import Footer from "./components/footer/Footer";
import Lol from "./pages/lol/Lol";
import LostArk from "./pages/lostark/LostArk";
import Poe from "./pages/poe/Poe";
import Etc from "./pages/etc/Etc";

function App({ youtube }) {
  return (
    <div className="app">
      <div className="appContainer">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Main youtube={youtube} />
            </Route>
            <Route exact path="/lol">
              <Lol />
            </Route>
            <Route exact path="/lostark">
              <LostArk />
            </Route>
            <Route exact path="/poe">
              <Poe />
            </Route>
            <Route exact path="/etc">
              <Etc />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
