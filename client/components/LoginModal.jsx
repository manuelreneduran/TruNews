import React from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";


const LoginModal = ({
  showLoginModal,
  toggleLoginModal,
  setUsername,
  setPassword,
  handleLogin,
  loggedIn,
  loginError
}) => {

  return (
    <>
      <Modal show={showLoginModal} onHide={toggleLoginModal}>
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
              <Button variant="secondary" onClick={toggleLoginModal}>
                Close
              </Button>
              <Button variant="primary" onClick={handleLogin}>
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

export default LoginModal;
