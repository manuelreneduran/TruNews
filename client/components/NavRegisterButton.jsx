import React from "react";
import PropTypes from "prop-types";
import { Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { setShowRegisterModal } from "../store/actions/index";

export const UnconnectedNavRegisterButton = ({
  showRegisterModal,
  setShowRegisterModal,
}) => {
  return (
    <>
      <Nav.Link
        data-test="component-nav-register-button"
        href="#link"
        onClick={() => setShowRegisterModal(showRegisterModal)}
      >
        Register
      </Nav.Link>
    </>
  );
};

const mapStateToProps = (state) => {
  return { showRegisterModal: state.registerModal.showRegisterModal };
};

function mapDispatchToProps(dispatch) {
  return {
    setShowRegisterModal: (bool) => dispatch(setShowRegisterModal(bool)),
  };
}

UnconnectedNavRegisterButton.propTypes = {
  showRegisterModal: PropTypes.bool,
  setShowRegisterModal: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedNavRegisterButton);
