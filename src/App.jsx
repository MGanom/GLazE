import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import Footer from "./components/footer/Footer";

function App({ youtube }) {
  return (
    <div className="app">
      <div className="appContainer">
        <Header />
        <Router>
          <Switch>
            <Route exact path="/">
              <Main youtube={youtube} />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
