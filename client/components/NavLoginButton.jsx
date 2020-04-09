import React from "react";
import { Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { setShowLoginModal } from '../store/actions/index'

const ConnectedNavLoginButton = ({ setShowLoginModal, showLoginModal }) => {
  return (
    <>
      <Nav.Link
        href="#home"
        className="login-button1"
        onClick={(e) => setShowLoginModal(showLoginModal)}
      >
        Login
      </Nav.Link>
    </>
  );
};


const mapStateToProps = state => {
  return { showLoginModal: state.loginModal.showLoginModal };
};

function mapDispatchToProps(dispatch) {
  return {
    setShowLoginModal: bool => dispatch(setShowLoginModal(bool))
  };
}

const NavLoginButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedNavLoginButton);

export default NavLoginButton;