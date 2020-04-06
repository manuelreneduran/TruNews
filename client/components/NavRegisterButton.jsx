import React from "react";
import { Nav } from "react-bootstrap";

const NavRegisterButton = ({ toggleRegisterModal }) => {
  return (
    <>
      <Nav.Link href="#link" onClick={(e) => toggleRegisterModal()}>
        Register
      </Nav.Link>
    </>
  );
};

export default NavRegisterButton;
