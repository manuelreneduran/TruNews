import React from "react";
import PropTypes from "prop-types";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import { setShowContactModal } from "../store/actions/index";

export const UnconnectedContactModal = ({
  showContactModal,
  setShowContactModal,
}) => {
  return (
    <>
      <Modal
        data-test="component-contact-modal"
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
            data-test="button-secondary"
            variant="secondary"
            onClick={() => setShowContactModal(showContactModal)}
          >
            Close
          </Button>
          <Button
            data-test="button-primary"
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

UnconnectedContactModal.propTypes = {
  showContactModal: PropTypes.bool,
  setShowContactModal: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedContactModal);
