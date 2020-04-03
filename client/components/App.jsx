import React from "react";
import NavBar from './NavBar';
import Footer from "./Footer.jsx";
import LoginModal from './LoginModal';
import MoreTopNews from './MoreTopNews';


const App = () => {

  const [showLoginModal, setShowLoginModal] = React.useState(false);

  function toggleLoginModal() {
    setShowLoginModal(!showLoginModal);
  }

  return (
    <div data-test="container-app" id="app">
      <NavBar data-test="navbar" toggleLoginModal={toggleLoginModal}/>
      {showLoginModal ? <LoginModal showLoginModal={showLoginModal} toggleLoginModal={toggleLoginModal} /> : null}
      <MoreTopNews data-test="more-top-news"/>
      <Footer data-test="footer"/>
    </div>

  );
};




export default App;
