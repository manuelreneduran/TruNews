import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import NavDropDown from "./NavDropDown";
import NavLoginButton from "./NavLoginButton";
import NavRegisterButton from "./NavRegisterButton";
import { connect } from "react-redux";
import { setLoggedIn } from "../store/actions/index";

const ConnectedNavbar = ({ loggedIn }) => {
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
              <NavRegisterButton />
            </>
          )}

          {!loggedIn ? null : (
            <NavDropDown />
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

function mapDispatchToProps(dispatch) {
  return {
    setLoggedIn: bool => dispatch(setLoggedIn(bool))
  };
}

const NavBar = connect(mapStateToProps, mapDispatchToProps)(ConnectedNavbar);

export default NavBar;
