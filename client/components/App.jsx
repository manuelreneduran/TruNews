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
import { connect } from "react-redux";
import { setUser, setLoggedIn, getData } from "../store/actions/index";

export const UnconnectedApp = ({
  showLoginModal,
  showContactModal,
  showRegisterModal,
  setUser,
  setLoggedIn,
  articles,
  getData,
}) => {
  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    hookactions.getUserByToken(setUser, setLoggedIn);
  }, []);

  return (
    <div data-test="container-app" id="app">
      <NavBar data-test="navbar" />
      {showLoginModal ? <LoginModal data-test="login-modal"/> : null}
      {showContactModal ? <ContactModal data-test="contact-modal"/> : null}
      {showRegisterModal ? <RegisterModal data-test="register-modal"/> : null}
      )}
      {articles.length > 0 ? (
        <>
          <h5 style={{ marginTop: "5em", margin: "70px 30px 0px 30px" }}>
            TOP NEWS
          </h5>

          <TopNews data-test="top-news"topArticles={articles.slice(0, 5)} />
          <MoreTopNews data-test="more-top-news" articles={articles.slice(5)} data-test="more-top-news" />
        </>
      ) : (
        <Spinner data-test="spinner"/>
      )}
      <Footer data-test="footer" />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    showLoginModal: state.loginModal.showLoginModal,
    showContactModal: state.contactModal.showContactModal,
    showRegisterModal: state.registerModal.showRegisterModal,
    articles: state.articles.articles,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setUser: (value) => dispatch(setUser(value)),
    setLoggedIn: (bool) => dispatch(setLoggedIn(bool)),
    getData: () => dispatch(getData()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedApp);
