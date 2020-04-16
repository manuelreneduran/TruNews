import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Card, ListGroup } from "react-bootstrap";

export const UnconnectedSavedArticles = () => {
  return (
    <Card data-test="component-saved-articles" className="sticky-top" id="saved-articles">
      <Card.Header style={{borderBottom: '5px solid blue'}}>Your Saved Articles</Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item action hover="true" href="#">
            Cras justo odio
          </ListGroup.Item>
          <ListGroup.Item action hover="true">
            Dapibus ac facilisis in
          </ListGroup.Item>
          <ListGroup.Item action hover="true">
            Morbi leo risus
          </ListGroup.Item>
          <ListGroup.Item action hover="true">
            Porta ac consectetur acfdsfefgsdfsdfsdgrsdgs
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default connect()(UnconnectedSavedArticles);
