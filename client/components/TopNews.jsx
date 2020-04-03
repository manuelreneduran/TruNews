import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TopArticleJumbo from "./TopArticleJumbo";

const TopNews = ({ topArticles }) => {
  return (
    <Container fluid style={{ marginTop: "5em" }}>
      <Row>
        <Col className="mx-3">
          <h5>TOP NEWS</h5>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <TopArticleJumbo
            urlToImage={topArticles[0].urlToImage}
            url={topArticles[0].url}
            content={topArticles[0].content}
            title={topArticles[0].title}
          />
        </Col>
        <Col lg={3} className="d-none d-md-block"></Col>
        <Col lg={3} className="d-none d-md-block"></Col>
      </Row>
    </Container>
  );
};

export default TopNews;
