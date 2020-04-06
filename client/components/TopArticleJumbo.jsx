import React from "react";
import { Col, Image } from "react-bootstrap";

const TopArticleJumbo = ({ title, content, url, urlToImage, source, author }) => {
  return (
    <>
      <Col xs={12}>
        <a style={{ textDecoration: "none" }} href={url}>
          <h2>{title}</h2>
        </a>
      </Col>
      <Col xs={12}>
        <a style={{ textDecoration: "none" }} href={url}>
          <Image fluid src={urlToImage} />
        </a>
      </Col>
      <Col xs={12}>
      {source ? <p className="mb-1"  style={{ fontSize: ".75em" }}><strong>{source}</strong></p> : null }
          {author ? <p className="mb-1"  style={{ fontSize: ".75em" }}>By {author}</p> : null}
        <p>{`${content.split(" ").slice(0, 30).join(" ")}...`}</p>
      </Col>
    </>
  );
};

export default TopArticleJumbo;
