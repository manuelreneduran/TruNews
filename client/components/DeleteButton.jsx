import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteSavedArticle } from "../store/actions/index";
import deleteIcon from "../../public/images/delete.svg";

export const UnconnectedDeleteButton = ({
  deleteSavedArticle,
  article,
  user,
}) => {
  return (
    <img
      onClick={() => deleteSavedArticle(article, user)}
      src={deleteIcon}
      className="delete-icon"
      style={{
        height: "15px",
        width: "15px",
        transition: "transform .1s",
      }}
      alt="delete icon"
    />
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteSavedArticle: (article, username) =>
      dispatch(deleteSavedArticle(article, username)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedDeleteButton);
