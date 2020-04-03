import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const TopPosts = () => {
  return (
    <Card className="sticky-top" id="top-posts">
      <Card.Header style={{borderBottom: '5px solid blue'}}>Top Posts</Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item action hover="true" href="#">
            Cras justo odio
          </ListGroup.Item>
          <ListGroup.Item action hover="true">
            Dapibus ac facilisis in
          </ListGroup.Item>
          <ListGroup.Item action hover="true">
            Morbi leo risus
          </ListGroup.Item>
          <ListGroup.Item action hover="true">
            Porta ac consectetur acfdsfefgsdfsdfsdgrsdgs
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default TopPosts;
