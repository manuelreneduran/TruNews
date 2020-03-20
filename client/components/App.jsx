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
      <div className="app">

        <nav className="navbar">
            <div className="container-logo">
              <Link to="/">{getHomeText()}</Link>
            </div>
            <div className="container-submit">
              <Link to="/submit">{getSubmitText()}</Link>
            </div>
            <div className="container-login">
              <Login/>
            </div>
        </nav>

        <Switch>
          <Route exact path="/">
            <Feed/>
          </Route>
          <Route path="/submit">
            <Submit/>
          </Route>
        </Switch>

        <div className="container-footer">
          <Footer/>
        </div>
      </div>
    </Router>


  )

}

function getHomeText() {
  return (
    <div className="logo">
      <h2>SEENT</h2>
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