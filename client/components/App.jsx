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
import { setUser, setLoggedIn } from "../store/actions/index";

const ConnectedApp = ({
  showLoginModal,
  showContactModal,
  showRegisterModal,
  setUser,
  setLoggedIn,
}) => {
  const [articles, setArticles] = React.useState(null);

  React.useEffect(() => {
    hookactions.getArticles(setArticles);
  }, []);

  React.useEffect(() => {
    hookactions.getUserByToken(setUser, setLoggedIn);
  }, []);

  return (
    <div data-test="container-app" id="app">
      <NavBar data-test="navbar" />
      {showLoginModal ? <LoginModal /> : null}
      {showContactModal ? <ContactModal /> : null}
      {showRegisterModal ? <RegisterModal /> : null}
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
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setUser: (value) => dispatch(setUser(value)),
    setLoggedIn: (bool) => dispatch(setLoggedIn(bool)),
  };
}

const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp);

export default App;
