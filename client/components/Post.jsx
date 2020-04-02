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
        <Col sm={3}>
          <p>By So and So</p>
        </Col>
        <Col sm={3}>
          <p className="text-muted">X time ago</p>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={3}>
          <Image
            rounded
            fluid
            id="post-image"
            src="https://storage.googleapis.com/afs-prod/media/8d2f2f456bc44114b6c16ebf5a21069c/400.jpeg"
            alt="Generic placeholder"
          />
        </Col>
        <Col sm={12} md={9} className="d-none d-sm-block">
          <p className="lead">This is the {id}</p>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Vote rank={rank}/>
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
