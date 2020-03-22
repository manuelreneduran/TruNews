import React, { useState } from 'react';
import Axios from 'axios';

const Vote = ( {id, rank } ) => {
  const [counter, setCounter] = useState(rank || 0);

  function voteHandler(vote) {
    const updateVote = vote => {
      let totalRank = counter + vote;
      setCounter(totalRank);
      Axios.put(`/post/:${id}`, { rank: totalRank })
    }
    updateVote(vote)
  }

  return (
    <div>
      <button id="count-up" onClick={e => voteHandler(1)}>upvote</button>
      <label>{counter}</label>
      <button id="count-down" onClick={e => voteHandler(-1)}>downvote</button>
    </div>
  )
}

export default Vote;