import React from 'react';
import { NavDropdown } from 'react-bootstrap';

const NavDropDown = ({ user, handleLogout }) => {
  return (
    <>
    <NavDropdown
      drop="down"
      alignRight={true}
      title={user || "user"}
      id="basic-nav-dropdown"
    >
      <NavDropdown.Item href="#action/3.2">
        My Saved Articles
      </NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2" onClick={handleLogout}>
        Logout
      </NavDropdown.Item>
    </NavDropdown>
  </>
  )
}

export default NavDropDown