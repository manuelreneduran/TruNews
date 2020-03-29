import React, { useState } from 'react';
import Axios from 'axios';

const Vote = ( {id, rank } ) => {
  const [counter, setCounter] = useState(rank || 0);

  function voteHandler(vote) {
    const updateVote = vote => {
      let totalRank = counter + vote;
      setCounter(totalRank);
      Axios.put(`/post/${id}`, { rank: totalRank })
    }
    updateVote(vote)
  }

  return (
    <div className="vote-container flex-column-center-center">
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

export default Vote;