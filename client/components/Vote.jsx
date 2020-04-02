import React from "react";
import Axios from "axios";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Vote = ({ id, rank }) => {
  const [counter, setCounter] = React.useState(rank || 0);

  function voteHandler(vote) {
    const updateVote = vote => {
      let totalRank = counter + vote;
      setCounter(totalRank);
      Axios.put(`/post/${id}`, { rank: totalRank });
    };
    updateVote(vote);
  }

  // return (
  //   <div className="vote-container" data-test="component-vote">
  //     <button
  //       id="count-up"
  //       className="count bg-transparent"
  //       data-test="increment-button"
  //       onClick={e => voteHandler(1)}
  //     >
  //       <i className="fas fa-angle-up fa-2x"></i>
  //     </button>
  //     <label data-test="counter">{counter}</label>
  //     <button
  //       id="count-down"
  //       className="count bg-transparent"
  //       data-test="decrement-button"
  //       onClick={e => voteHandler(-1)}
  //     >
  //       <i className="fas fa-angle-down fa-2x"></i>
  //     </button>
  //   </div>
  // );

  return (
    <Container fluid className="px-0" data-test="component-vote">
      <Row className="no-gutters">
        <Col xl={1} className="d-flex align-items-center">
          <button
            id="count-up"
            className="count bg-transparent"
            data-test="increment-button"
            onClick={e => voteHandler(1)}
          >
            <i className="fas fa-angle-up fa-2x"></i>
          </button>
          <p id="vote-counter" className="pb-0 mb-0 align-middle d-inline-block" data-test="counter">{counter}</p>
          <button
            id="count-down"
            className="count bg-transparent"
            data-test="decrement-button"
            onClick={e => voteHandler(-1)}
          >
            <i className="fas fa-angle-down fa-2x"></i>
          </button>
        </Col>
      </Row>
    </Container>
  );
};

Vote.propTypes = {
  id: PropTypes.number,
  rank: PropTypes.number
};

export default Vote;
