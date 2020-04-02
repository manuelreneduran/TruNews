import React from "react";
import Post from "./Post.jsx";
import axios from "axios";
import Spinner from "./Spinner.jsx";
import hookactions from "../actions/hookactions";
import { Container, Row, Col } from "react-bootstrap";

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
        <Col className="col">
          <div className="feed" data-test="component-feed">
            {!posts ? (
              <div data-test="spinner">
                <Spinner />
              </div>
            ) : (
              <ul className="list-unstyled" data-test="posts">
                {posts.map(post => {
                  return (
                    <li data-test="post" key={post.id}>
                      <Post id={post.id} title={post.title} rank={post.rank} />
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Feed;
