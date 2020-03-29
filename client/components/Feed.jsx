import React, { useState, useEffect } from 'react'
import Post from './Post.jsx';
import axios from 'axios';
import { sortBy } from '../helpers/index.js'
import Spinner from './Spinner.jsx';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [sort, setSort] = useState('top');
  const [showSpinner, setSpinner] = useState(true);

  useEffect(() => {
    const fetchPosts = () => {
      axios.get('/post/all')
      .then((res) => {
        setPosts(sortBy(res.data, sort))
        setSpinner(false);
      })
      .catch(err => {
        throw new Error(`error fetching posts: ${err}`)
      })
    }
    fetchPosts();
  }, []);


  return (
    <div className="feed flex-column-center-center" data-test="container-feed">
      {showSpinner ? <Spinner/> :
      <ul>
        {posts.length > 0 ?
        posts.map((post) => {
          return <li className="post-container" key={post.id}><Post id={post.id} title={post.title} rank={post.rank}/></li>
        })
        : null}

      </ul>}

  </div>
  )
}

export default Feed;