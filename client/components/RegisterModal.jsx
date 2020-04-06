import React from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";

const RegisterModal = ({
  showRegisterModal,
  toggleRegisterModal,
  setUsername,
  setPassword,
  setPasswordConf,
  passwordMatch,
  handleRegisterSubmit,
  userExists,
  loggedIn
}) => {
  return (
    <>
      <Modal
        show={showRegisterModal}
        onHide={(toggleRegisterModal)}
      >
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
          {userExists ? (
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
            <p className="text-success">Registration successful! Please wait...</p>
          ) : (
            <>
              <Button variant="secondary" onClick={toggleRegisterModal}>
                Close
              </Button>
              <Button variant="primary" onClick={handleRegisterSubmit}>
                Register
              </Button>{" "}
            </>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RegisterModal;