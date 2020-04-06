import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavBar = ({ toggleRegisterModal, toggleLoginModal, user, loggedIn }) => {
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
              <Nav.Link
                href="#home"
                className="login-button1"
                onClick={(e) => toggleLoginModal()}
              >
                Login
              </Nav.Link>
              <Nav.Link href="#link" onClick={(e) => toggleRegisterModal()}>
                Register
              </Nav.Link>
            </>
          )}
          <NavDropdown
            drop="down"
            alignRight={true}
            title={user || "user"}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
