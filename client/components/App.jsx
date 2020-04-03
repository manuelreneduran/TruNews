import React from "react";
import NavBar from './NavBar';
import Footer from "./Footer.jsx";
import LoginModal from './LoginModal';
import MoreTopNews from './MoreTopNews';
import ContactModal from './ContactModal';

const App = () => {

  const [showLoginModal, setShowLoginModal] = React.useState(false);
  const [showContactModal, setContactModal] = React.useState(false);

  function toggleLoginModal() {
      setShowLoginModal(!showLoginModal);
  }

  function toggleContactModal() {
    setContactModal(!showContactModal);
  }

  return (
    <div data-test="container-app" id="app">
      <NavBar data-test="navbar" toggleLoginModal={toggleLoginModal}/>
      {showLoginModal ? <LoginModal showLoginModal={showLoginModal} toggleLoginModal={toggleLoginModal} /> : null}
      {showContactModal ? <ContactModal showContactModal={showContactModal} toggleContactModal={toggleContactModal} /> : null}
      <MoreTopNews data-test="more-top-news"/>
      <Footer toggleContactModal={toggleContactModal} data-test="footer"/>
    </div>

  );
};




export default App;
