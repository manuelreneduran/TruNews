import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import RegisterModal from "./RegisterModal";
import ContactModal from "./ContactModal";
import LoginModal from "./LoginModal";
import TopNews from "./TopNews";
import MoreTopNews from "./MoreTopNews";
import Spinner from "./Spinner";
import hookactions from "../actions/hookactions";
import { setToLocalStorage } from "../utls/index";
import { connect } from "react-redux";
import {
  setShowLoginModal,
  setShowContactModal,
  setShowRegisterModal,
  setUser,
  setLoggedIn
} from "../store/actions/index";

const ConnectedApp = ({
  showLoginModal,
  setShowLoginModal,
  showContactModal,
  showRegisterModal,
  setShowRegisterModal,
  setUser,
  setLoggedIn,
  loggedIn
}) => {
  const [articles, setArticles] = React.useState(null);
  const [userAlreadyExists, setUserAlreadyExists] = React.useState(null);
  const [loginError, setLoginError] = React.useState(false);
  const [userName, setUsername] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [passwordConf, setPasswordConf] = React.useState(null);
  const [passwordMatch, setPasswordMatch] = React.useState(true);
  // const [loggedIn, setLoggedIn] = React.useState(false);

  React.useEffect(() => {
    hookactions.getArticles(setArticles);
  }, []);

  React.useEffect(() => {
    hookactions.getUserByToken(setUser, setLoggedIn);
  }, []);

  function toggleModal(modal) {
    switch (modal) {
      case "login":
        return setShowLoginModal(showLoginModal);
      case "register":
        return setShowRegisterModal(showRegisterModal);
    }
  }

  function showSuccessfulReg(modal) {
    setTimeout(() => {
      toggleModal(modal);
    }, 1500);
  }

  const handleRegisterSubmit = async () => {
    if (userName || (userName && userName.length > 0)) {
      if (password !== passwordConf) {
        setPasswordMatch(false);
      } else {
        const response = await hookactions.registerUser(
          userName,
          password,
          setUser,
          setUserAlreadyExists
        );
        if (response.data.code) {
          setUserAlreadyExists(true);
        } else {
          login(response, 'register');
        }
      }
    } else {
      setLoginError(true);
    }
  };

  const handleLoginSubmit = async () => {
    if (userName && password) {
      const response = await hookactions.getUser(userName, password);
      if (response.data.error === "Wrong password") {
        setLoginError(true);
      } else {
        login(response, 'login');
      }
    } else {
      setLoginError(true);
    }
  };

  function login(response, modal) {
    setUser(response.data.username);
    setToLocalStorage(response.data.token);
    setPasswordMatch(true);
    setUserAlreadyExists(false);
    setUsername(null);
    setPassword(null);
    setPasswordConf(null);
    setLoggedIn(true);
    showSuccessfulReg(modal);
  }

  return (
    <div data-test="container-app" id="app">
      <NavBar data-test="navbar" />
      {showLoginModal ? (
        <LoginModal
          setUsername={setUsername}
          setPassword={setPassword}
          handleLoginSubmit={handleLoginSubmit}
          loggedIn={loggedIn}
          loginError={loginError}
        />
      ) : null}
      {showContactModal ? <ContactModal /> : null}
      {showRegisterModal ? (
        <RegisterModal
          setUsername={setUsername}
          setPassword={setPassword}
          setPasswordConf={setPasswordConf}
          passwordMatch={passwordMatch}
          handleRegisterSubmit={handleRegisterSubmit}
          userAlreadyExists={userAlreadyExists}
          loggedIn={loggedIn}
          registerError={loginError}
        />
      ) : null}
      )}
      {articles ? (
        <>
          <h5 style={{ marginTop: "5em", margin: "70px 30px 0px 30px" }}>
            TOP NEWS
          </h5>

          <TopNews topArticles={articles.slice(0, 5)} />
          <MoreTopNews articles={articles.slice(5)} data-test="more-top-news" />
          <Footer data-test="footer" />
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    showLoginModal: state.loginModal.showLoginModal,
    showContactModal: state.contactModal.showContactModal,
    showRegisterModal: state.registerModal.showRegisterModal,
    loggedIn: state.login.loggedIn,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setShowLoginModal: bool => dispatch(setShowLoginModal(bool)),
    setShowContactModal: bool => dispatch(setShowContactModal(bool)),
    setShowRegisterModal: bool => dispatch(setShowRegisterModal(bool)),
    setUser: value => dispatch(setUser(value)),
    setLoggedIn: bool => dispatch(setLoggedIn(bool))
  };
}

const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp);

export default App;
