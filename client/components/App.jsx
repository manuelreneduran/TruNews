import React from 'react';
import Login from './Login.jsx';
import Feed from './Feed.jsx';
import Submit from './Submit.jsx';
import Footer from './Footer.jsx';
import '../style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="app" data-test="container-app">
        <nav
          className="navbar flex-row-center-between"
          data-test="container-navbar">
          <Link to="/">{getHomeText()}</Link>
          <Link to="/submit">{getSubmitText()}</Link>
          <Login />
        </nav>
        <Switch>
          <Route exact path="/">
            <Feed data-test="feed"/>
          </Route>
          <Route path="/submit">
            <Submit data-test="submit"/>
          </Route>
        </Switch>
        <Footer data-test="footer"/>
      </div>
    </Router>
  );

}

function getHomeText() {
  return (
    <div className="logo flex-row-center-between">
      <i className="fab fa-earlybirds fa-2x"></i>
      <p className="logo-text">SEENT</p>
    </div>
  );
}

function getSubmitText() {
  return (
    <div className="button-submit">
      <h4>Submit</h4>
    </div>
  )
}

export default App;