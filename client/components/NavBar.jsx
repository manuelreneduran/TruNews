import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import NavDropDown from "./NavDropDown";
import NavLoginButton from "./NavLoginButton";
import NavRegisterButton from "./NavRegisterButton";

const NavBar = ({
  toggleRegisterModal,
  toggleLoginModal,
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
              <NavLoginButton toggleLoginModal={toggleLoginModal} />
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

export default NavBar;
