import React from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";

const ContactModal = ({ showContactModal, toggleContactModal }) => {
  return (
    <>
      <Modal show={showContactModal} onHide={toggleContactModal}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Name</label>
          <InputGroup type="text">
            <FormControl type="text"></FormControl>
          </InputGroup>
          <label>Email</label>

          <InputGroup>
            <FormControl type="email"></FormControl>
          </InputGroup>
          <label>Message</label>

          <InputGroup type="text">
            <FormControl as="textarea"></FormControl>
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleContactModal}>
            Close
          </Button>
          <Button variant="primary" onClick={toggleContactModal}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ContactModal;
