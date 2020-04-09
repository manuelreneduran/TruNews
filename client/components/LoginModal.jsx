import React from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import { setShowLoginModal } from '../store/actions/index'

const ConnectedLoginModal = ({
  showLoginModal,
  setUsername,
  setPassword,
  handleLoginSubmit,
  loggedIn,
  loginError,
  setShowLoginModal
}) => {

  return (
    <>
      <Modal show={showLoginModal} onHide={() => setShowLoginModal(showLoginModal)}>
        <Modal.Header>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Username</label>
          <InputGroup className="mb-2">
            <FormControl
            required
              onChange={(e) => setUsername(e.target.value)}
              type="text"
            ></FormControl>
          </InputGroup>
          <label>Password</label>
          <InputGroup className="mb-2">
            <FormControl
            required
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            ></FormControl>
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          {loggedIn ? (
            <p className="text-success">Success! Logging in now..</p>
          ) : (
            <>
              <Button variant="secondary" onClick={() => setShowLoginModal(showLoginModal)}>
                Close
              </Button>
              <Button variant="primary" onClick={handleLoginSubmit}>
                Login
              </Button>
            </>
          )}
          {loginError ? (
            <p className="text-danger">
              Error logging in. Please check your username or password.
            </p>
          ) : null}
        </Modal.Footer>
      </Modal>
    </>
  );
};

const mapStateToProps = state => {
  return {
    showLoginModal: state.loginModal.showLoginModal,
    loggedIn: state.login.loggedIn
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setShowLoginModal: bool => dispatch(setShowLoginModal(bool))
  };
}

const LoginModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedLoginModal);

export default LoginModal;
