import React from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Image } from 'react-bootstrap';

const NavBar = ({ toggleLoginModal }) => {
  return (
    <Navbar bg="light" fixed="top" variant="light" expand="lg" data-test="component-navabr">
      <Navbar.Brand id="brand" href="#home">

        TruNews</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home" className="login-button1" onClick={toggleLoginModal}>Login</Nav.Link>
          <Nav.Link href="#link">Register</Nav.Link>
          <NavDropdown drop="down" alignRight={true} title="User" id="basic-nav-dropdown">
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
