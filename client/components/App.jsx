import React from "react";
import Feed from "./Feed.jsx";
import NavBar from './NavBar';
import Footer from "./Footer.jsx";
import LoginModal from './LoginModal';
import "../style.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

  const [showLoginModal, setShowLoginModal] = React.useState(false);

  function toggleLoginModal() {
    setShowLoginModal(!showLoginModal);
  }

  return (
    <div id="app">
      <NavBar toggleLoginModal={toggleLoginModal}/>
      {showLoginModal ? <LoginModal showLoginModal={showLoginModal} toggleLoginModal={toggleLoginModal} /> : null}
      <Feed/>
      <Footer/>
    </div>

  );
};




export default App;
