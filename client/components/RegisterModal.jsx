import React from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";

const RegisterModal = ({ showRegisterModal, toggleRegisterModal, setUsername, setPassword, setPasswordConf, passwordMatch, handleRegisterSubmit }) => {
  return (
    <>
      <Modal show={showRegisterModal} onHide={toggleRegisterModal}>
        <Modal.Header>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Username</label>
          <InputGroup  className="mb-2">
            <FormControl onChange={e => setUsername(e.target.value)} type="text"></FormControl>
          </InputGroup>
          <label>Password</label>
          <InputGroup className="mb-2">
            <FormControl onChange={e => setPassword(e.target.value)} type="password"></FormControl>
          </InputGroup>
          <label>Re-type Password</label>
          <InputGroup className="mb-2">
            <FormControl onChange={e => setPasswordConf(e.target.value)} type="password"></FormControl>
          </InputGroup>
          {!passwordMatch ? <p className="text-danger">Your password does not match</p> : null}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleRegisterModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleRegisterSubmit}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RegisterModal;
