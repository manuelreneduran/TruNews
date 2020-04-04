import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import RegisterModal from "./RegisterModal";
import ContactModal from "./ContactModal";
import LoginModal from "./LoginModal";
import TopNews from "./TopNews";
import MoreTopNews from "./MoreTopNews";
import hookactions from "../actions/hookactions";

const App = () => {
  const [showLoginModal, setShowLoginModal] = React.useState(false);
  const [showContactModal, setContactModal] = React.useState(false);
  const [showRegisterModal, setRegisterModal] = React.useState(false);
  const [articles, setArticles] = React.useState(null);

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
        />
      ) : null}
      )}
      {articles ? (
        <>
          <TopNews topArticles={articles.slice(0, 5)} />
          <MoreTopNews articles={articles.slice(5)} data-test="more-top-news" />
        </>
      ) : null}
      <Footer toggleContactModal={toggleContactModal} data-test="footer" />
    </div>
  );
};

export default App;
