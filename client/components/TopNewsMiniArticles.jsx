import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TopArticleMini from "./TopArticleMini";

const TopNewsMiniArticles = ({ topNewsMiniArticles }) => {

  const mapMiniArticles = (articles) => {
    return articles.map((ele, ind) => {
      if (ele.urlToImage && ele.content) {
        return (
          <div key={ind}>
            <TopArticleMini
              urlToImage={ele.urlToImage}
              url={ele.url}
              content={ele.content}
              title={ele.title}
              author={ele.author}
              source={ele.source.name}
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
            {mapMiniArticles(topNewsMiniArticles)}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default TopNewsMiniArticles;
