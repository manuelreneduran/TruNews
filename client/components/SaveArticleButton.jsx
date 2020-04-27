import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import { saveArticle } from "../store/actions";

export const UnconnectedSaveArticleButton = ({
  title,
  urlToImage,
  url,
  content,
  source,
  author,
  publishedAt,
  user,
  saveArticle
}) => {
  return (
    <Button
      variant="outline-info"
      size="sm"
      onClick={() =>
        saveArticle(
          {
            title,
            urlToImage,
            url,
            content,
            source,
            author,
            publishedAt,
          },
          user
        )
      }
      className="d-inline"
    >
      Save Article
    </Button>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveArticle: (article, user) => dispatch(saveArticle(article, user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedSaveArticleButton);
