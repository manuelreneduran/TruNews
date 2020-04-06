import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const TopArticleMini = ({ title, url, content, urlToImage, author, source }) => {
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
        {source ? <p className="mb-1"  style={{ fontSize: ".75em" }}><strong>{source}</strong></p> : null }
          {author ? <p className="mb-1"  style={{ fontSize: ".75em" }}>By {author}</p> : null}
          {content ? <p style={{ fontSize: "1em" }}>{content.split(" ").slice(0, 20).join(" ") + "..."}</p> : null}
        </Col>
      </Row>
    </Container>
  );
};

export default TopArticleMini;
