import React, { useState } from 'react';

export default function Vote() {
  const [counter, setCounter] = useState(0);

  function voteHandler(vote) {
    const updateVote = async (vote) => {
      if (counter >= 0) {
        await setCounter(counter + vote);
      }
    }
    updateVote(vote)
  }

  return (
    <div>
      <button onClick={e => voteHandler(1)}>upvote</button>
      <p>{counter}</p>
      <button onClick={e => voteHandler(-1)}>downvote</button>
    </div>
  )
}