import React from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import { setShowRegisterModal } from '../store/actions/index'

const ConnectedRegisterModal = ({
  showRegisterModal,
  setShowRegisterModal,
  setUsername,
  setPassword,
  setPasswordConf,
  passwordMatch,
  handleRegisterSubmit,
  userAlreadyExists,
  loggedIn,
  registerError,
}) => {
  return (
    <>
      <Modal show={showRegisterModal} onHide={() => setShowRegisterModal(showRegisterModal)}>
        <Modal.Header>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Username</label>
          <InputGroup className="mb-2">
            <FormControl
              onChange={(e) => setUsername(e.target.value)}
              type="text"
            ></FormControl>
          </InputGroup>
          {userAlreadyExists ? (
            <p className="text-danger">
              Username is taken. Please select another.
            </p>
          ) : null}
          <label>Password</label>
          <InputGroup className="mb-2">
            <FormControl
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            ></FormControl>
          </InputGroup>
          <label>Re-type Password</label>
          <InputGroup className="mb-2">
            <FormControl
              onChange={(e) => setPasswordConf(e.target.value)}
              type="password"
            ></FormControl>
          </InputGroup>
          {!passwordMatch ? (
            <p className="text-danger">Your password does not match</p>
          ) : null}
        </Modal.Body>
        <Modal.Footer>
          {loggedIn ? (
            <p className="text-success">
              Registration successful! Please wait...
            </p>
          ) : (
            <>
              <Button variant="secondary" onClick={() => setShowRegisterModal(showRegisterModal)}>
                Close
              </Button>
              <Button variant="primary" onClick={handleRegisterSubmit}>
                Register
              </Button>{" "}
            </>
          )}
          {registerError ? (
            <p className="text-danger">
              Registration error. Please check username and password.
            </p>
          ) : null}
        </Modal.Footer>
      </Modal>
    </>
  );
};

const mapStateToProps = state => {
  return {
    showRegisterModal: state.registerModal.showRegisterModal,
    loggedIn: state.login.loggedIn
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setShowRegisterModal: bool => dispatch(setShowRegisterModal(bool))
  };
}

const RegisterModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedRegisterModal);

export default RegisterModal;
