import React from 'react';
import Vote from './Vote.jsx'
import PropTypes from 'prop-types';

const Post = ({ rank, title }) => {
  return (
    <div className="post">
      <Vote/>
      <p>this is the rank:{rank}, this is the title: {title}</p>
    </div>
  )
}

Post.propTypes = {
  title: PropTypes.string,
  rank: PropTypes.number,
}

Post.defaultProps = {
  rank: 0,
  title: ""
}

export default Post