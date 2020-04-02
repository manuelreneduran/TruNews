import React from "react";
import Vote from "./Vote.jsx";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/image";

const Post = ({ id, title, rank }) => {
  return (
    <Container className="component-post border border-dark bg-light p-3 my-3">
      <Row>
        <Col lg={12}>
        <h4>{title}</h4>
        </Col>
      </Row>
      <Row>
        <Col sm={3}>
          <p>By So and So</p>
        </Col>
        <Col sm={3}>
          <p className="text-muted">
            X time ago
          </p>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={3}>
          <Image
            rounded
            fluid
            src="https://source.unsplash.com/random/"
            alt="Generic placeholder"
          />
        </Col>
        <Col sm={12} md={9} className="d-none d-sm-block">
          <p className="lead">This is the {id}</p>
        </Col>
      </Row>
    </Container>
  );
};

Post.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  rank: PropTypes.number
};

export default Post;
