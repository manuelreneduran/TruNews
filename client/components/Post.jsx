import React from 'react';
import Vote from './Vote.jsx'
import PropTypes from 'prop-types';

const Post = ({ id, title }) => {
  return (
    <div className="post">
      <Vote/>
      <p>this is the id:{id}, this is the title: {title}</p>
    </div>
  )
}

Post.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
}

Post.defaultProps = {
  id: 0,
  title: ""
}

export default Post;