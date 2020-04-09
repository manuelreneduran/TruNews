import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { connect } from "react-redux";
import { setShowContactModal } from "../store/actions/index";

const ConnectedFooter = ({ setShowContactModal, showContactModal }) => {
  return (
    <footer className="bg-light" data-test="component-footer">
      <Container>
        <Row>
          <Col className="text-center py-4">
            <h3 style={{display: 'inline-block', borderBottom: '5px blue solid'}}>TruNews</h3>
            <p>Copyright &copy; 2020</p>
            <p>By Manuel Duran</p>
            <Button onClick={() => setShowContactModal(showContactModal)} variant="primary">Contact Me</Button>
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

const Footer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedFooter);

export default Footer;