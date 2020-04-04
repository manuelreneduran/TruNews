import React from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";

const RegisterModal = ({ showRegisterModal, toggleRegisterModal }) => {
  return (
    <>
      <Modal show={showRegisterModal} onHide={toggleRegisterModal}>
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
          <Button variant="secondary" onClick={toggleRegisterModal}>
            Close
          </Button>
          <Button variant="primary" onClick={toggleRegisterModal}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RegisterModal;
