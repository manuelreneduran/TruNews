import React, { useState } from 'react';

const Vote = () => {
  const [counter, setCounter] = useState(0);

  function voteHandler(vote) {
    const updateVote = async (vote) => {
      await setCounter(counter + vote);
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