import React from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";

const LoginModal = ({ showLoginModal, toggleLoginModal }) => {
  return (
    <>
      <Modal show={showLoginModal} onHide={toggleLoginModal}>
        <Modal.Header>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Username</label>
          <InputGroup  className="mb-2">
            <FormControl type="text"></FormControl>
          </InputGroup>
          <label>Password</label>
          <InputGroup className="mb-2">
            <FormControl type="text"></FormControl>
          </InputGroup>
          <label>Re-type Password</label>
          <InputGroup className="mb-2">
            <FormControl></FormControl>
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleLoginModal}>
            Close
          </Button>
          <Button variant="primary" onClick={toggleLoginModal}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginModal;
