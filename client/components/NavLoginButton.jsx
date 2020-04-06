import React from "react";
import { Nav } from "react-bootstrap";

const NavLoginButton = ({ toggleLoginModal }) => {
  return (
    <>
      <Nav.Link
        href="#home"
        className="login-button1"
        onClick={(e) => toggleLoginModal()}
      >
        Login
      </Nav.Link>
    </>
  );
};

export default NavLoginButton;