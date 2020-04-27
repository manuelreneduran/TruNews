import React from "react";
import SaveArticleButton from "./SaveArticleButton";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Moment from "moment";

export const UnconnectedTopArticleJumbo = ({
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
        <a target="_blank" href={url}>
          <h2>{title}</h2>
        </a>
      </Col>
      <Col xs={12}>
        <a target="_blank" href={url}>
          <Image fluid src={urlToImage} />
        </a>
      </Col>
      <Col xs={12}>
        {source ? (
          <p
            data-test="article-source"
            className="mb-1"
            style={{ fontSize: ".75em" }}
          >
            <strong>{source}</strong>
          </p>
        ) : null}
        {author ? (
          <p
            data-test="article-author"
            className="mb-1"
            style={{ fontSize: ".75em" }}
          >
            By {author}
          </p>
        ) : null}
        {publishedAt ? (
          <p
            data-test="article-published-at"
            className="text-muted"
            style={{ fontSize: ".75em" }}
          >
            {Moment(publishedAt).fromNow()}
          </p>
        ) : null}

        {content ? (
          <p>{`${content.split(" ").slice(0, 30).join(" ")}...`}</p>
        ) : null}
        <SaveArticleButton
          title={title}
          urlToImage={urlToImage}
          url={url}
          content={content}
          source={source}
          author={author}
          publishedAt={publishedAt}
        />
      </Col>
    </>
  );
};

UnconnectedTopArticleJumbo.propTypes = {
  title: PropTypes.string,
  urlToImage: PropTypes.string,
  url: PropTypes.string,
  content: PropTypes.string,
  source: PropTypes.string,
  author: PropTypes.string,
  publishedAt: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date),
  ]),
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(UnconnectedTopArticleJumbo);
