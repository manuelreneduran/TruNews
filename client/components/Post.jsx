import React from "react";
import PropTypes from "prop-types";
import { Media, Badge } from "react-bootstrap";

const Post = ({ title, desc, imageUrl, url, source }) => {
  return (
    <Media data-test="post" className="mb-4" id="media-article" as="li">
      <a style={{ textDecoration: "none" }} href={url}>
        <img src={imageUrl} width={200} height={124} className="mr-3"></img>
      </a>
      <Media.Body>
        <a style={{ textDecoration: "none" }} href={url}>
          <h5>{title}</h5>
        </a>
        <p>{`${desc.split(" ").slice(0, 25).join(" ")}...`}</p>
      </Media.Body>
    </Media>
  );
};

Post.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  rank: PropTypes.number,
};

export default Post;
