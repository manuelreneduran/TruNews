import React from "react";
import Article from "./Article.jsx";
import { Container, Row, Col } from "react-bootstrap";
import SavedArticles from "./SavedArticles";

const MoreTopNews = ({ articles }) => {


  return (
    <Container fluid className="bg-light mt-5">
      <Row>
        <Col>
        <h5 className="mb-3" style={{borderBottom: '1px blue solid'}}>MORE TOP NEWS</h5>
        </Col>
      </Row>
      <Row className="row">
        <Col className="col" lg={8}>
          <div className="MoreTopNews" data-test="component-MoreTopNews">
            {!articles ? null : (
              <ul className="list-unstyled" data-test="Articles">
                {articles.map((article, ind) => {
                  if (article.urlToImage && article.content) {
                    return (
                      <div key={ind}>
                        <Article
                          data-test="Article"
                          content={article.content}
                          title={article.title}
                          urlToImage={article.urlToImage}
                          url={article.url}
                          source={article.source.name}
                        />
                      </div>
                    );
                    {
                    }
                  }
                })}
              </ul>
            )}
          </div>
        </Col>
        <Col lg={4} className="d-none d-md-block">
          <SavedArticles />
        </Col>
      </Row>
    </Container>
  );
};

export default MoreTopNews;
