import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TopMiniArticle from "./TopMiniArticle";

const TopMiniArticles = ({ topMiniArticles }) => {

  const mapMiniArticles = (articles) => {
    return articles.map((ele, ind) => {
      if (ele.urlToImage && ele.content) {
        return (
          <div key={ind}>
            <TopMiniArticle
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
    <Container fluid>
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

export default TopMiniArticles;
