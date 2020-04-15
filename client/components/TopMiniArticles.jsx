import React from "react";
import PropTypes from 'prop-types';
import { Container, Row, Col } from "react-bootstrap";
import TopMiniArticle from "./TopMiniArticle";

const TopMiniArticles = ({ topMiniArticles }) => {

  const mapMiniArticles = (articles) => {
    return articles.map((ele, ind) => {
      if (ele.urlToImage && ele.content) {
        return (
          <div key={ind}>
            <TopMiniArticle
              data-test="top-mini-article"
              urlToImage={ele.urlToImage}
              url={ele.url}
              content={ele.content}
              title={ele.title}
              author={ele.author}
              source={ele.source.name}
              publishedAt={ele.publishedAt}
            />
          </div>
        );
      }
    });
  };

  return (
    <Container data-test="component-top-mini-articles" fluid>
      <Row>
        <Col >
          <ul className="list-unstyled">
            {mapMiniArticles(topMiniArticles)}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

TopMiniArticles.propTypes = {
  topMiniArticles: PropTypes.array
}

export default TopMiniArticles;
