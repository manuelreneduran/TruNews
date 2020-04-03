import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/card";

const Post = ({ id, title, rank }) => {
  return (
    <Card className="mb-5" data-test="component-post">
      <Card.Img
        variant="top"
        src="https://s3.reutersmedia.net/resources/r/?m=02&d=20200402&t=2&i=1511603605&w=530&fh=&fw=&ll=&pl=&sq=&r=LYNXMPEG3126Q"
      />
      <Card.ImgOverlay id="img-overlay" className="d-flex align-items-end">
        <Card.Title id="card-title" className=""><strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, enim!</strong></Card.Title>
      </Card.ImgOverlay>
      <Card.Body>
        <Card.Text>
          New York, New York City - This is an example news text...
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Post.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  rank: PropTypes.number
};

export default Post;
