import React from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import { setShowContactModal } from "../store/actions/index";

const ConnectedContactModal = ({ showContactModal, setShowContactModal }) => {
  return (
    <>
      <Modal
        show={showContactModal}
        onHide={() => setShowContactModal(showContactModal)}
      >
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
          <Button
            variant="secondary"
            onClick={() => setShowContactModal(showContactModal)}
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => setShowContactModal(showContactModal)}
          >
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => {
  return { showContactModal: state.contactModal.showContactModal };
};

function mapDispatchToProps(dispatch) {
  return {
    setShowContactModal: (bool) => dispatch(setShowContactModal(bool)),
  };
}

const ContactModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedContactModal);

export default ContactModal;
