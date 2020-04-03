import React from "react";
import PropTypes from "prop-types";
import { Media } from "react-bootstrap";

const Article = ({ title, desc, imageUrl, url, source }) => {
  return (
    <Media data-test="Article" className="mb-4" id="media-article" as="li">
      <a style={{ textDecoration: "none" }} href={url}>
        <img src={imageUrl} width={200} height={124} className="mr-3"></img>
      </a>
      <Media.Body>
        <a style={{ textDecoration: "none" }} href={url}>
          <h5>{title}</h5>
        </a>
        <p className="text-muted">{`${desc.split(" ").slice(0, 25).join(" ")}...`}</p>
      </Media.Body>
    </Media>
  );
};

Article.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  rank: PropTypes.number,
};

export default Article;
