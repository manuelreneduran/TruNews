import React from "react";
import Post from "./Post.jsx";
import axios from "axios";
import Spinner from "./Spinner.jsx";
import hookactions from "../actions/hookactions";
import { Container, Row, Col, CardDeck } from "react-bootstrap";

const Feed = () => {
  const [posts, setPosts] = React.useState(null);
  const [sort, setSort] = React.useState("top");

  const fetchPosts = () => {
    hookactions.getPosts(setPosts, sort);
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
              <CardDeck data-test="posts">
                <Row>
                  {posts.map((post, ind) => {
                    return (
                      <Col md={6} sm={12}>
                        <Post
                          data-test="post"
                          key={ind}
                          id={post.id}
                          title={post.title}
                          rank={post.rank}
                        />
                      </Col>
                    );
                  })}
                </Row>
              </CardDeck>
            )}
          </div>
        </Col>
        <Col lg={4} className="d-none d-md-block">
          <Post/>
        </Col>
      </Row>
    </Container>
  );
};

export default Feed;
