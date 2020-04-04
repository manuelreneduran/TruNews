import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const TopArticleMini = ({ title, url, content, urlToImage, author }) => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <a style={{ textDecoration: "none" }} href={url}>
            <h5>{title}</h5>
          </a>
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          <a style={{ textDecoration: "none" }} href={url}>
            <Image fluid src={urlToImage} />
          </a>
        </Col>
        <Col lg={8}>
          <p style={{ fontSize: ".75em" }}>By {author}</p>

          <p>{content.split(" ").slice(0, 20).join(" ") + " ..."}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default TopArticleMini;
