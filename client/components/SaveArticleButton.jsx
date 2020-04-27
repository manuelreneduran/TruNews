import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
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
    <p
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
      className="d-inline save-article-link"
    >
      Save Article
    </p>
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
