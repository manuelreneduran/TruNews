import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Card, ListGroup, Row, Col } from "react-bootstrap";
import deleteIcon from "../../open-iconic/svg/delete.svg";

export const UnconnectedSavedArticles = () => {
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
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Row>
              <Col xs={11}>
                <a href="#">
                  <p className="m-0 b-0">blah</p>
                </a>
              </Col>
              <Col xs={1}>
                <img
                  src={deleteIcon}
                  className="delete-icon"
                  style={{
                    height: "15px",
                    width: "15px",
                    transition: "transform .1s",
                  }}
                  alt="delete icon"
                  data-title=""
                />
              </Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default connect()(UnconnectedSavedArticles);
