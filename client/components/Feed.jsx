import React from "react";
import Article from "./Article.jsx";
import Spinner from "./Spinner.jsx";
import hookactions from "../actions/hookactions";
import { Container, Row, Col } from "react-bootstrap";
import SavedArticles from "./SavedArticles";

const Feed = () => {
  const [articles, setArticles] = React.useState(null);

  const fetchArticles = () => {
    hookactions.getArticles(setArticles);
  };

  React.useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <Container className="container feed-inner">
      <Row className="row">
        <Col className="col" lg={8}>
          <div className="feed" data-test="component-feed">
            {!articles ? (
              <div data-test="spinner">
                <Spinner />
              </div>
            ) : (
              <ul className="list-unstyled" data-test="Articles">
                {articles.map((article, ind) => {
                  if (article.urlToImage) {
                    return (
                      <div key={ind}>
                        <Article
                          data-test="Article"
                          title={article.title}
                          desc={article.description}
                          imageUrl={article.urlToImage}
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

export default Feed;
