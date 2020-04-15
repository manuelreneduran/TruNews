import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import TopArticleJumbo from "./TopArticleJumbo";
import TopMiniArticles from "./TopMiniArticles";

const TopNews = ({ topArticles }) => {
  const topMiniArticles = topArticles.slice(1);
  return (
    <Container data-test="component-top-news" className="mb-3" fluid>
      <Row>
        <Col lg={6}>
          <TopArticleJumbo
            data-test="top-article-jumbo"
            urlToImage={topArticles[0].urlToImage}
            url={topArticles[0].url}
            content={topArticles[0].content}
            title={topArticles[0].title}
            source={topArticles[0].source.name}
            author={topArticles[0].author}
            publishedAt={topArticles[0].publishedAt}
          />
        </Col>
        <Col lg={6} className="d-none d-lg-block">
          <TopMiniArticles
            data-test="top-mini-articles"
            topMiniArticles={topMiniArticles}
          />
        </Col>
      </Row>
    </Container>
  );
};

TopNews.propTypes = {
  topArticles: PropTypes.array
}

export default TopNews;
