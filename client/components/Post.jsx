import React from 'react';
import PropTypes from 'prop-types';

export default function Post({ id, title }) {
  return (
    <div className="post">
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