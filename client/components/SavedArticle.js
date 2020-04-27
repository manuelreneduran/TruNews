import React from "react";
import PropTypes from "prop-types";
import { ListGroup, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { deleteSavedArticle } from "../../client/store/actions/index";
import deleteIcon from "../../public/images/delete.svg";

export const UnconnectedSavedArticle = ({
  article,
  user,
  deleteSavedArticle,
}) => {
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
            <img
              onClick={(e) =>
                deleteSavedArticle(article, user)
              }
              src={deleteIcon}
              className="delete-icon"
              style={{
                height: "15px",
                width: "15px",
                transition: "transform .1s",
              }}
              alt="delete icon"
            />
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
