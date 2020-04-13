import React from "react";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import Footer from "./Footer";
import RegisterModal from "./RegisterModal";
import ContactModal from "./ContactModal";
import LoginModal from "./LoginModal";
import TopNews from "./TopNews";
import MoreTopNews from "./MoreTopNews";
import Spinner from "./Spinner";
import hookactions from "../actions/hookactions";

import { setUser, setLoggedIn, getData } from "../store/actions/index";

class UnconnectedApp extends React.Component {

  componentDidMount() {
    this.props.getData();
    hookactions.getUserByToken(setUser, setLoggedIn);
  }

  render() {
    const props = this.props;
    return (
      <div data-test="container-app" id="app">
        <NavBar data-test="navbar" />
        {props.showLoginModal ? <LoginModal data-test="login-modal"/> : null}
        {props.showContactModal ? <ContactModal data-test="contact-modal"/> : null}
        {props.showRegisterModal ? <RegisterModal data-test="register-modal"/> : null}
        )}
        {props.articles.length > 0 ? (
          <>
            <h5 style={{ marginTop: "5em", margin: "70px 30px 0px 30px" }}>
              TOP NEWS
            </h5>

            <TopNews data-test="top-news"topArticles={props.articles.slice(0, 5)} />
            <MoreTopNews data-test="more-top-news" articles={props.articles.slice(5)} data-test="more-top-news" />
          </>
        ) : (
          <Spinner data-test="spinner"/>
        )}
        <Footer data-test="footer" />
      </div>
    );
  }
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
