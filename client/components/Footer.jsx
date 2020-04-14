import React from 'react';
import PropTypes from "prop-types";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { connect } from "react-redux";
import { setShowContactModal } from "../store/actions/index";

export const UnconnectedFooter = ({ setShowContactModal, showContactModal }) => {
  return (
    <footer className="bg-light" data-test="component-footer">
      <Container>
        <Row>
          <Col className="text-center py-4">
            <h3 style={{display: 'inline-block', borderBottom: '5px blue solid'}}>TruNews</h3>
            <p>Copyright &copy; 2020</p>
            <p>By Manuel Duran</p>
            <Button data-test="button" onClick={() => setShowContactModal(showContactModal)} variant="primary">Contact Me</Button>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

const mapStateToProps = (state) => {
  return { showContactModal: state.contactModal.showContactModal };
};

function mapDispatchToProps(dispatch) {
  return {
    setShowContactModal: (bool) => dispatch(setShowContactModal(bool)),
  };
}

UnconnectedFooter.propTypes = {
  showContactModal: PropTypes.bool,
  setShowContactModal: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedFooter);
