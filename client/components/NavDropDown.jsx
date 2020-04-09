import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { connect } from "react-redux";
import { setLoggedIn, setUser } from '../store/actions/index';

const ConnectedNavDropDown = ({ user, setUser, setLoggedIn }) => {

  function handleLogout() {
    setUser(null);
    setLoggedIn(false);
    localStorage.removeItem("token");
  }

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

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setUser: val => dispatch(setUser(val)),
    setLoggedIn: bool => dispatch(setLoggedIn(bool))
  };
}

const NavDropDown = connect(mapStateToProps, mapDispatchToProps)(ConnectedNavDropDown);

export default NavDropDown