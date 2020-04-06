import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TopArticleJumbo from "./TopArticleJumbo";
import TopNewsMiniArticles from './TopNewsMiniArticles';

const TopNews = ({ topArticles }) => {
  const topNewsMiniArticles = topArticles.slice(1);
  return (
    <Container className="mb-3" fluid>
      <Row>

      </Row>
      <Row>
        <Col lg={6}>
          <TopArticleJumbo
            urlToImage={topArticles[0].urlToImage}
            url={topArticles[0].url}
            content={topArticles[0].content}
            title={topArticles[0].title}
            source={topArticles[0].source.name}
            author={topArticles[0].author}
          />
        </Col>
        <Col lg={6} className="d-none d-lg-block">
          <TopNewsMiniArticles topNewsMiniArticles={topNewsMiniArticles}/>
        </Col>
      </Row>
    </Container>
  );
};

export default TopNews;
