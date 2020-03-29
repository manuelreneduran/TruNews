import React from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';

const Vote = ( {id, rank } ) => {
  const [counter, setCounter] = React.useState(rank || 0);

  function voteHandler(vote) {
    const updateVote = vote => {
      let totalRank = counter + vote;
      setCounter(totalRank);
      Axios.put(`/post/${id}`, { rank: totalRank })
    }
    updateVote(vote)
  }

  return (
    <div className="vote-container flex-column-center-center" data-test="component-vote">
      <button id="count-up" className="count" onClick={e => voteHandler(1)}>
        <i className="fas fa-angle-up fa-2x"></i>
      </button>
      <label>{counter}</label>
      <button id="count-down" className="count" onClick={e => voteHandler(-1)}>
        <i className="fas fa-angle-down fa-2x"></i>
      </button>
    </div>
  )
}

Vote.propTypes = {
  id: PropTypes.number,
  rank: PropTypes.number
}

export default Vote;