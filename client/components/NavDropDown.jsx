import React from "react";
import * as Scroll from "react-scroll";
import PropTypes from "prop-types";
import { NavDropdown } from "react-bootstrap";
import { connect } from "react-redux";
import hookactions from "../actions/hookactions";

export const UnconnectedNavDropDown = ({ user }) => {
  let Link = Scroll.Link;

  return (
    <>
      <NavDropdown
        drop="down"
        alignRight={true}
        title={user || "user"}
        id="basic-nav-dropdown"
        data-test="component-nav-drop-down"
      >
        <Link
          to="saved-articles"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <NavDropdown.Item href="#action/3.2">
            My Saved Articles
          </NavDropdown.Item>
        </Link>
        <NavDropdown.Item
          data-test="logout-item"
          href="#action/3.2"
          onClick={hookactions.logout}
        >
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

UnconnectedNavDropDown.propTypes = {
  user: PropTypes.string,
};

export default connect(mapStateToProps)(UnconnectedNavDropDown);
