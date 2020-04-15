import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav } from "react-bootstrap";
import NavDropDown from "./NavDropDown";
import NavLoginButton from "./NavLoginButton";
import NavRegisterButton from "./NavRegisterButton";
import { connect } from "react-redux";

export const UnconnectedNavBar = ({ loggedIn }) => {
  return (
    <Navbar
      bg="light"
      fixed="top"
      variant="light"
      expand="lg"
      data-test="component-navbar"
    >
      <Navbar.Brand id="brand" href="#home">
        TruNews
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {loggedIn ? (
            <NavDropDown data-test="nav-drop-down" />
          ) : (
            <>
              <NavLoginButton data-test="nav-login-button" />
              <NavRegisterButton data-test="nav-register-button" />
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.login.loggedIn,
  };
};

UnconnectedNavBar.propTypes = {
  loggedIn: PropTypes.bool,
};

export default connect(mapStateToProps)(UnconnectedNavBar);
