import React from "react";
import SaveArticleButton from "./SaveArticleButton";
import PropTypes from "prop-types";
import { Media } from "react-bootstrap";
import Moment from "moment";

const Article = ({
  title,
  urlToImage,
  url,
  content,
  source,
  author,
  publishedAt,
}) => {
  return (
    <Media
      data-test="component-article"
      className="mb-4"
      id="media-article"
      as="li"
    >
      <a target="_blank" href={url}>
        <img src={urlToImage} width={200} height={124} className="mr-3"></img>
      </a>
      <Media.Body>
        <a target="_blank" href={url}>
          <h5 data-test="title">{title}</h5>
        </a>
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
            className="text-muted mb-1"
            style={{ fontSize: ".75em" }}
          >
            {Moment(publishedAt).fromNow()}
          </p>
        ) : null}

        <p className="text-muted">{`${content
          .split(" ")
          .slice(0, 25)
          .join(" ")}...`}</p>
        <SaveArticleButton
          title={title}
          urlToImage={urlToImage}
          url={url}
          content={content}
          source={source}
          author={author}
          publishedAt={publishedAt}
        />
      </Media.Body>
    </Media>
  );
};

Article.propTypes = {
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

export default Article;
