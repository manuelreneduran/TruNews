import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import LoginModal from "./LoginModal";
import TopNews from "./TopNews";
import MoreTopNews from "./MoreTopNews";
import ContactModal from "./ContactModal";
import hookactions from "../actions/hookactions";
import Spinner from "./Spinner";

const App = () => {
  const [showLoginModal, setShowLoginModal] = React.useState(false);
  const [showContactModal, setContactModal] = React.useState(false);
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



  return (
    <div data-test="container-app" id="app">
      <NavBar data-test="navbar" toggleLoginModal={toggleLoginModal} />
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
      {articles ? (
        <>
          <TopNews topArticles={articles.slice(0, 6)} />
          <MoreTopNews articles={articles.slice(6)} data-test="more-top-news" />
        </>
      ) : null }
      <Footer toggleContactModal={toggleContactModal} data-test="footer" />
    </div>
  );
};

export default App;
