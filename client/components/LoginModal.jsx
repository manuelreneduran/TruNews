import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const LoginModal = ({ showLoginModal, toggleLoginModal }) => {
  return (
    <>
      <Modal show={showLoginModal} onHide={toggleLoginModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleLoginModal}>
            Close
          </Button>
          <Button variant="primary" onClick={toggleLoginModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default LoginModal;