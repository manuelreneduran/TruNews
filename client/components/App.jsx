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
import { setShowLoginModal, setShowContactModal } from "../store/actions/index";

const ConnectedApp = ({
  showLoginModal,
  setShowLoginModal,
  setShowContactModal,
  showContactModal,
}) => {
  // const [showContactModal, setContactModal] = React.useState(false);
  const [showRegisterModal, setRegisterModal] = React.useState(false);
  const [articles, setArticles] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [userAlreadyExists, setUserAlreadyExists] = React.useState(null);
  const [loginError, setLoginError] = React.useState(false);
  const [userName, setUsername] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [passwordConf, setPasswordConf] = React.useState(null);
  const [passwordMatch, setPasswordMatch] = React.useState(true);
  const [loggedIn, setLoggedIn] = React.useState(false);

  React.useEffect(() => {
    hookactions.getArticles(setArticles);
  }, []);

  React.useEffect(() => {
    hookactions.getUserByToken(setUser, setLoggedIn);
  }, []);

  function toggleModal(modal) {
    switch (modal) {
      case "login":
        setShowLoginModal(showLoginModal);
      case "register":
        toggleRegisterModal();
      case "contact":
        toggleContactModal();
    }
  }

  function toggleContactModal() {
    setShowContactModal(showContactModal);
  }

  function toggleRegisterModal() {
    setRegisterModal(!showRegisterModal);
  }

  function showSuccessfulReg(toggleModal) {
    setLoggedIn(true);
    setTimeout(() => {
      toggleModal();
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
          login(response, toggleModal("register"));
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
        login(response, toggleModal("login"));
      }
    } else {
      setLoginError(true);
    }
  };

  function handleLogout() {
    setUser(null);
    setLoggedIn(false);
    localStorage.removeItem("token");
  }

  function login(response, toggleModal) {
    setUser(response.data.username);
    setToLocalStorage(response.data.token);
    setPasswordMatch(true);
    setUserAlreadyExists(false);
    setUsername(null);
    setPassword(null);
    setPasswordConf(null);
    showSuccessfulReg(toggleModal);
  }

  return (
    <div data-test="container-app" id="app">
      <NavBar
        data-test="navbar"
        toggleRegisterModal={toggleRegisterModal}
        user={user}
        loggedIn={loggedIn}
        handleLogout={handleLogout}
      />
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
          showRegisterModal={showRegisterModal}
          toggleRegisterModal={toggleRegisterModal}
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
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setShowLoginModal: (bool) => dispatch(setShowLoginModal(bool)),
    setShowContactModal: (bool) => dispatch(setShowContactModal(bool)),
  };
}

const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp);

export default App;
