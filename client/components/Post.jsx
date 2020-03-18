import React from 'react';
import PropTypes from 'prop-types';

export default function Post({ title, id }) {
  return (
    <div className="post">
      <p>{id}</p>
      <p>{title}</p>
    </div>
  )
}

Post.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number
}