import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Card, ListGroup } from "react-bootstrap";
import SavedArticle from "./SavedArticle";

export const UnconnectedSavedArticles = ({ savedArticles }) => {
  console.log(JSON.stringify(savedArticles))
  const listItems = savedArticles.map((ele, id) => {
    return <SavedArticle article={ele} key={id} />;
  });
  return (
    <Card
      data-test="component-saved-articles"
      className="sticky-top"
      id="saved-articles"
    >
      <Card.Header style={{ borderBottom: "5px solid blue" }}>
        Your Saved Articles
      </Card.Header>
      <Card.Body>
        <ListGroup variant="flush">{listItems}</ListGroup>
      </Card.Body>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    savedArticles: state.articles.savedArticles,
  };
};

UnconnectedSavedArticles.propTypes = {
  savedArticles: PropTypes.array,
};

export default connect(mapStateToProps)(UnconnectedSavedArticles);
