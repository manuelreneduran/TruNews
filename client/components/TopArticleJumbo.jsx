import React from "react";
import PropTypes from "prop-types";
import { Col, Image } from "react-bootstrap";
import Moment from "moment";

const TopArticleJumbo = ({
  title,
  content,
  url,
  urlToImage,
  source,
  author,
  publishedAt,
}) => {
  return (
    <>
      <Col data-test="component-top-article-jumbo" xs={12}>
        <a target="_blank" style={{ textDecoration: "none" }} href={url}>
          <h2>{title}</h2>
        </a>
      </Col>
      <Col xs={12}>
        <a target="_blank" style={{ textDecoration: "none" }} href={url}>
          <Image fluid src={urlToImage} />
        </a>
      </Col>
      <Col xs={12}>
        {source ? (
          <p data-test="article-source" className="mb-1" style={{ fontSize: ".75em" }}>
            <strong>{source}</strong>
          </p>
        ) : null}
        {author ? (
          <p data-test="article-author" className="mb-1" style={{ fontSize: ".75em" }}>
            By {author}
          </p>
        ) : null}
        {publishedAt ? <p data-test="article-published-at" className="text-muted" style={{ fontSize: ".75em" }}>{Moment(publishedAt).fromNow()}</p> : null}

        <p>{`${content.split(" ").slice(0, 30).join(" ")}...`}</p>
      </Col>
    </>
  );
};

TopArticleJumbo.propTypes = {
  title: PropTypes.string,
  urlToImage: PropTypes.string,
  url: PropTypes.string,
  content: PropTypes.string,
  source: PropTypes.string,
  author: PropTypes.string,
  publishedAt: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ])
};

export default TopArticleJumbo;
