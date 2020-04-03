import React from "react";
import Post from "./Post.jsx";
import Spinner from "./Spinner.jsx";
import hookactions from "../actions/hookactions";
import { Container, Row, Col, CardDeck } from "react-bootstrap";
import TopPosts from "./TopPosts";

const Feed = () => {
  const [posts, setPosts] = React.useState(null);

  const fetchPosts = () => {
    hookactions.getPosts(setPosts);
  };

  React.useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Container className="container feed-inner">
      <Row className="row">
        <Col className="col" lg={8}>
          <div className="feed" data-test="component-feed">
            {!posts ? (
              <div data-test="spinner">
                <Spinner />
              </div>
            ) : (
              <ul className="list-unstyled" data-test="posts">
                {/* <Row> */}
                {posts.map((post, ind) => {
                  if (post.urlToImage) {
                    return (
                      // <Col md={6} sm={12} key={ind}>
                      <Post
                        data-test="post"
                        title={post.title}
                        desc={post.description}
                        imageUrl={post.urlToImage}
                        url={post.url}
                        source={post.source.name}
                      />
                    );
                    {
                      /* </Col> */
                    }
                  }
                })}
                {/* </Row> */}
              </ul>
            )}
          </div>
        </Col>
        <Col lg={4} className="d-none d-md-block">
          <TopPosts />
        </Col>
      </Row>
    </Container>
  );
};

export default Feed;
