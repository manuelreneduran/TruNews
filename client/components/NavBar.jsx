import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import NavDropDown from "./NavDropDown";
import NavLoginButton from "./NavLoginButton";
import NavRegisterButton from "./NavRegisterButton";
import { connect } from "react-redux";
import { setShowLoginModal } from '../store/actions/index'

const ConnectedNavbar = ({
  toggleRegisterModal,
  user,
  loggedIn,
  handleLogout,
}) => {
  return (
    <Navbar
      bg="light"
      fixed="top"
      variant="light"
      expand="lg"
      data-test="component-navabr"
    >
      <Navbar.Brand id="brand" href="#home">
        TruNews
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {loggedIn ? null : (
            <>
              <NavLoginButton />
              <NavRegisterButton toggleRegisterModal={toggleRegisterModal} />
            </>
          )}

          {!loggedIn ? null : (
            <NavDropDown user={user} handleLogout={handleLogout} />
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = state => {
  return { showLoginModal: state.loginModal.showLoginModal };
};

function mapDispatchToProps(dispatch) {
  return {
    setShowLoginModal: bool => dispatch(setShowLoginModal(bool))
  };
}

const NavBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedNavbar);

export default NavBar;
