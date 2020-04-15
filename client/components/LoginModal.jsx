import React from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import hookactions from "../actions/hookactions";
import {
  setShowLoginModal,
  setUsername,
  setPassword,
} from "../store/actions/index";

export const UnconnectedLoginModal = ({
  showLoginModal,
  setUsername,
  setPassword,
  loginError,
  setShowLoginModal,
}) => {
  return (
    <>
      <Modal
        data-test="component-login-modal"
        show={showLoginModal}
        onHide={() => setShowLoginModal(showLoginModal)}
      >
        <Modal.Header>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Username</label>
          <InputGroup className="mb-2">
            <FormControl
              data-test="input-username"
              required
              onChange={(e) => setUsername(e.target.value)}
              type="text"
            ></FormControl>
          </InputGroup>
          <label>Password</label>
          <InputGroup className="mb-2">
            <FormControl
              data-test="input-password"
              required
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            ></FormControl>
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <>
            <Button
              data-test="button-secondary"
              variant="secondary"
              onClick={() => setShowLoginModal(showLoginModal)}
            >
              Close
            </Button>
            <Button
              data-test="button-primary"
              variant="primary"
              onClick={hookactions.handleLoginSubmit}
            >
              Login
            </Button>
          </>

          {loginError ? (
            <p data-test="login-error-warning" className="text-danger">
              Error logging in. Please check your username or password.
            </p>
          ) : null}
        </Modal.Footer>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    showLoginModal: state.loginModal.showLoginModal,
    loginError: state.login.loginError,
    password: state.user.password,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setShowLoginModal: (bool) => dispatch(setShowLoginModal(bool)),
    setUsername: (value) => dispatch(setUsername(value)),
    setPassword: (value) => dispatch(setPassword(value)),
  };
}

UnconnectedLoginModal.propTypes = {
  showLoginModal: PropTypes.bool,
  loginError: PropTypes.bool,
  setShowLoginModal: PropTypes.func,
  setUsername: PropTypes.func,
  setPassword: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedLoginModal);
