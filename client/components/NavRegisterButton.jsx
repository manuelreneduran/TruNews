import React from "react";
import { Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { setShowRegisterModal } from '../store/actions/index'

const ConnectedNavRegisterButton = ({ showRegisterModal, setShowRegisterModal }) => {
  return (
    <>
      <Nav.Link href="#link" onClick={() => setShowRegisterModal(showRegisterModal)}>
        Register
      </Nav.Link>
    </>
  );
};

const mapStateToProps = state => {
  return { showRegisterModal: state.registerModal.showRegisterModal };
};

function mapDispatchToProps(dispatch) {
  return {
    setShowRegisterModal: bool => dispatch(setShowRegisterModal(bool))
  };
}

const NavRegisterButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedNavRegisterButton);

export default NavRegisterButton;
