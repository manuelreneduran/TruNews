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
  setShowRegisterModal,
  setUser,
  setLoggedIn,
  setUserAlreadyExists,
  setUsername,
  setLoginError,
  setPassword,
  setPasswordConf,
  setPasswordMatch,
} from "../store/actions/index";

const ConnectedApp = ({
  showLoginModal,
  setShowLoginModal,
  showContactModal,
  showRegisterModal,
  setShowRegisterModal,
  setUser,
  setLoggedIn,
  setUserAlreadyExists,
  setUsername,
  userName,
  setLoginError,
  password,
  setPassword,
  setPasswordConf,
  passwordConf,
  setPasswordMatch,
}) => {
  const [articles, setArticles] = React.useState(null);

  React.useEffect(() => {
    hookactions.getArticles(setArticles);
  }, []);

  React.useEffect(() => {
    hookactions.getUserByToken(setUser, setLoggedIn);
  }, []);

  const handleRegisterSubmit = async () => {
    console.log('here 1')
    if (userName || (userName && userName.length > 0)) {
      if (password !== passwordConf) {
        setPasswordMatch(false);
      } else {
        const response = await hookactions.registerUser(userName, password);
        if (response.data.error) {
          setUserAlreadyExists(true);
        } else {
          console.log(response)
          login(response);
          setShowRegisterModal(showRegisterModal)
        }
      }
    } else {
      setLoginError(true);
    }
  };

  const handleLoginSubmit = async () => {
    console.log('login submit');
    if (userName && password) {
      const response = await hookactions.getUser(userName, password);
      if (response.data.error === "Wrong password") {
        setLoginError(true);
      } else {
        login(response);
        setShowLoginModal(showLoginModal)
      }
    } else {
      setLoginError(true);
    }
  };

  function login(response) {
    console.log('login');
    setUser(response.data.username);
    setToLocalStorage(response.data.token);
    setPasswordMatch(true);
    setUserAlreadyExists(false);
    setUsername(null);
    setPassword(null);
    setPasswordConf(null);
    setLoggedIn(true);
  }

  return (
    <div data-test="container-app" id="app">
      <NavBar data-test="navbar" />
      {showLoginModal ? (
        <LoginModal handleLoginSubmit={handleLoginSubmit} />
      ) : null}
      {showContactModal ? <ContactModal /> : null}
      {showRegisterModal ? (
        <RegisterModal handleRegisterSubmit={handleRegisterSubmit} />
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
    userName: state.user.username,
    loginError: state.login.loginError,
    password: state.user.password,
    passwordConf: state.user.passwordConf,
    passwordMatch: state.user.passwordMatch,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setShowLoginModal: (bool) => dispatch(setShowLoginModal(bool)),
    setShowRegisterModal: (bool) => dispatch(setShowRegisterModal(bool)),
    setUser: (value) => dispatch(setUser(value)),
    setLoggedIn: (bool) => dispatch(setLoggedIn(bool)),
    setUserAlreadyExists: (bool) => dispatch(setUserAlreadyExists(bool)),
    setUsername: (value) => dispatch(setUsername(value)),
    setLoginError: (bool) => dispatch(setLoginError(bool)),
    setPassword: (value) => dispatch(setPassword(value)),
    setPasswordConf: (value) => dispatch(setPasswordConf(value)),
    setPasswordMatch: (bool) => dispatch(setPasswordMatch(bool)),
  };
}

const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp);

export default App;
