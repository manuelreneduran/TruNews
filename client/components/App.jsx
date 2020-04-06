import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import RegisterModal from "./RegisterModal";
import ContactModal from "./ContactModal";
import LoginModal from "./LoginModal";
import TopNews from "./TopNews";
import MoreTopNews from "./MoreTopNews";
import Spinner from './Spinner';
import hookactions from "../actions/hookactions";

const App = () => {
  const [showLoginModal, setShowLoginModal] = React.useState(false);
  const [showContactModal, setContactModal] = React.useState(false);
  const [showRegisterModal, setRegisterModal] = React.useState(false);
  const [articles, setArticles] = React.useState(null);
  const [userName, setUsername] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [passwordConf, setPasswordConf] = React.useState(null);
  const [passwordMatch, setPasswordMatch] = React.useState(true);

  const fetchArticles = () => {
    hookactions.getArticles(setArticles);
  };

  React.useEffect(() => {
    fetchArticles();
  }, []);

  function toggleLoginModal() {
    setShowLoginModal(!showLoginModal);
  }

  function toggleContactModal() {
    setContactModal(!showContactModal);
  }

  function toggleRegisterModal() {
    setRegisterModal(!showRegisterModal);
  }

  function handleRegisterSubmit() {
    if (password !== passwordConf) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
      toggleRegisterModal();
    }
  }

  return (
    <div data-test="container-app" id="app">
      <NavBar data-test="navbar" toggleRegisterModal={toggleRegisterModal} toggleLoginModal={toggleLoginModal} />
      {showLoginModal ? (
        <LoginModal
          showLoginModal={showLoginModal}
          toggleLoginModal={toggleLoginModal}
        />
      ) : null}
      {showContactModal ? (
        <ContactModal
          showContactModal={showContactModal}
          toggleContactModal={toggleContactModal}
        />
      ) : null}
      {showRegisterModal ? (
        <RegisterModal
          showRegisterModal={showRegisterModal}
          toggleRegisterModal={toggleRegisterModal}
          setUsername={setUsername}
          setPassword={setPassword}
          setPasswordConf={setPasswordConf}
          passwordMatch={passwordMatch}
          handleRegisterSubmit={handleRegisterSubmit}
        />
      ) : null}
      )}
      {articles ? (
        <>
            <h5 style={{marginTop: '5em', margin:'70px 30px 0px 30px'}}>TOP NEWS</h5>

          <TopNews topArticles={articles.slice(0, 5)} />
          <MoreTopNews articles={articles.slice(5)} data-test="more-top-news" />
          <Footer toggleContactModal={toggleContactModal} data-test="footer" />
        </>
      ) : <Spinner/>}
    </div>
  );
};

export default App;
