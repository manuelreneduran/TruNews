import React from "react";
import { NavDropdown } from "react-bootstrap";
import { connect } from "react-redux";
import { logout } from "../actions/hookactions";

const ConnectedNavDropDown = ({ user }) => {
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
        <NavDropdown.Item href="#action/3.2" onClick={logout}>
          Logout
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};



const NavDropDown = connect(
  mapStateToProps
)(ConnectedNavDropDown);

export default NavDropDown;
