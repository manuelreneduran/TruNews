import React from "react";
import PropTypes from "prop-types";
import { Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { setShowLoginModal } from "../store/actions/index";

export const UnconnectedNavLoginButton = ({
  setShowLoginModal,
  showLoginModal,
}) => {
  return (
    <>
      <Nav.Link
        data-test="component-nav-login-button"
        href="#home"
        className="login-button1"
        onClick={(e) => setShowLoginModal(showLoginModal)}
      >
        Login
      </Nav.Link>
    </>
  );
};

const mapStateToProps = (state) => {
  return { showLoginModal: state.loginModal.showLoginModal };
};

function mapDispatchToProps(dispatch) {
  return {
    setShowLoginModal: (bool) => dispatch(setShowLoginModal(bool)),
  };
}

UnconnectedNavLoginButton.propTypes = {
  setShowLoginModal: PropTypes.func,
  showLoginModal: PropTypes.bool
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedNavLoginButton);
