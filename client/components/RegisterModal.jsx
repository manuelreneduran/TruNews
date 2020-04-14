import React from "react";
import PropTypes from "prop-types";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import hookactions from "../actions/hookactions";
import {
  setShowRegisterModal,
  setUsername,
  setPassword,
  setPasswordConf,
} from "../store/actions/index";

export const UnconnectedRegisterModal = ({
  showRegisterModal,
  setShowRegisterModal,
  setUsername,
  setPassword,
  setPasswordConf,
  passwordMatch,
  userAlreadyExists,
  loginError,
}) => {
  return (
    <>
      <Modal
        data-test="component-register-modal"
        show={showRegisterModal}
        onHide={() => setShowRegisterModal(showRegisterModal)}
      >
        <Modal.Header>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Username</label>
          <InputGroup className="mb-2">
            <FormControl
              data-test="input-username"
              onChange={(e) => setUsername(e.target.value)}
              type="text"
            ></FormControl>
          </InputGroup>
          {userAlreadyExists ? (
            <p data-test="username-warning" className="text-danger">
              Username is taken. Please select another.
            </p>
          ) : null}
          <label>Password</label>
          <InputGroup className="mb-2">
            <FormControl
              data-test="input-password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            ></FormControl>
          </InputGroup>
          <label>Re-type Password</label>
          <InputGroup className="mb-2">
            <FormControl
              data-test="input-password-conf"
              onChange={(e) => setPasswordConf(e.target.value)}
              type="password"
            ></FormControl>
          </InputGroup>
          {!passwordMatch ? (
            <p data-test="password-match-warning" className="text-danger">
              Your password does not match
            </p>
          ) : null}
        </Modal.Body>
        <Modal.Footer>
          <>
            <Button
              data-test="button-secondary"
              variant="secondary"
              onClick={() => setShowRegisterModal(showRegisterModal)}
            >
              Close
            </Button>
            <Button
              data-test="button-primary"
              variant="primary"
              onClick={hookactions.handleRegisterSubmit}
            >
              Register
            </Button>{" "}
          </>

          {loginError ? (
            <p data-test="login-error-warning" className="text-danger">
              Registration error. Please check username and password.
            </p>
          ) : null}
        </Modal.Footer>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    showRegisterModal: state.registerModal.showRegisterModal,
    userAlreadyExists: state.user.userAlreadyExists,
    loginError: state.login.loginError,
    passwordMatch: state.user.passwordMatch,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setShowRegisterModal: (bool) => dispatch(setShowRegisterModal(bool)),
    setUsername: (value) => dispatch(setUsername(value)),
    setPassword: (value) => dispatch(setPassword(value)),
    setPasswordConf: (value) => dispatch(setPasswordConf(value)),
  };
}

UnconnectedRegisterModal.propTypes = {
  showRegisterModal: PropTypes.bool,
  userAlreadyExists: PropTypes.bool,
  loginError: PropTypes.bool,
  passwordMatch: PropTypes.bool,
  setShowRegisterModal: PropTypes.func,
  setUsername: PropTypes.func,
  setPassword: PropTypes.func,
  setPasswordConf: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedRegisterModal);
