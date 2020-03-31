import React from "react";
import Login from "./Login.jsx";
import Feed from "./Feed.jsx";
import Submit from "./Submit.jsx";
import Footer from "./Footer.jsx";
import "../style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="app container-fluid no-padding" data-test="container-app">
        <div className="row no-gutters">
          <div className="col">
            <nav
              className="navbar sticky-top navbar-light bg-light"
              data-test="container-navbar"
            >
              <div>
                <Link to="/">{getHomeText()}</Link>
              </div>
              <div>
                <Link to="/submit">{getSubmitText()}</Link>
              </div>
              <div>
                <Login />
              </div>
            </nav>
          </div>
        </div>

        <div className="row no-gutters">
          <div className="col">
            <Switch>
              <Route exact path="/">
                <Feed data-test="feed" />
              </Route>
              <Route path="/submit">
                <Submit data-test="submit" />
              </Route>
            </Switch>
            <Footer data-test="footer" />
          </div>
        </div>
      </div>
    </Router>
  );
};

function getHomeText() {
  return (
    <div className="navbar-brand">
      <div className="row">
        <i className="fab fa-earlybirds fa-2x col"></i>
        <p className="logo-text col">SEENT</p>
      </div>
    </div>
  );
}

function getSubmitText() {
  return (
    <div className="button-submit">
      <h4>Submit</h4>
    </div>
  );
}

export default App;
