import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Card, ListGroup, Row, Col } from "react-bootstrap";
import deleteIcon from "../../public/images/delete.svg";

export const UnconnectedSavedArticles = ({ savedArticles }) => {
  const listItems = savedArticles.map((ele, id) => {
    return (
      <ListGroup.Item key={id}>
        <Row>
          <Col xs={11}>
            <a href={ele.url}>
              <p className="m-0 b-0 d-inline">{ele.title}</p>
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
              data-title={ele.title}
            />
          </Col>
        </Row>
      </ListGroup.Item>
    );
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
        <ListGroup variant="flush">
          {listItems}
        </ListGroup>
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
  savedArticles: PropTypes.array
}

export default connect(mapStateToProps)(UnconnectedSavedArticles);
