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
      <div className="app container" data-test="container-app">
        <div
          className=" container"
          data-test="container-navbar">
          <div className="row justify-content-space-between">
            <div className="col-lg">
              <Link to="/">{getHomeText()}</Link>
            </div>
            <div className="col-lg">
              <Link to="/submit">{getSubmitText()}</Link>
            </div>
            <div className="col-g">
              <Login />
            </div>
          </div>

        </div>
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
    <div className="logo">
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
  )
}

export default App;