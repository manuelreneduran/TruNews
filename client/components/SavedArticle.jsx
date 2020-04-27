import React from "react";
import PropTypes from "prop-types";
import DeleteButton from "./DeleteButton";
import { ListGroup, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { deleteSavedArticle } from "../store/actions/index";

export const UnconnectedSavedArticle = ({ article }) => {
  return (
    <>
      <ListGroup.Item>
        <Row>
          <Col xs={11}>
            <a href={article.url}>
              <p className="m-0 b-0 d-inline">{article.title}</p>
            </a>
          </Col>
          <Col xs={1}>
            <DeleteButton article={article} />
          </Col>
        </Row>
      </ListGroup.Item>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteSavedArticle: (article, username) =>
      dispatch(deleteSavedArticle(article, username)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedSavedArticle);
