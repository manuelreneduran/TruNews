import React from "react";
import { Col, Image } from "react-bootstrap";

const TopArticleJumbo = ({ title, content, url, urlToImage }) => {
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
        <p>{`${content.split(" ").slice(0, 30).join(" ")}...`}</p>
      </Col>
    </>
  );
};

export default TopArticleJumbo;
