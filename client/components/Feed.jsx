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
    const fetchPosts = async () => {
      const posts = await axios.get('/post/all');
      setPosts(sortBy(posts.data, sort))
      setSpinner(false);
    }
    fetchPosts();
  }, []);

  //for testing only
  const addTestPost = () => {
    let testPost = {
      title: "this is a set post",
      id: 100000
    }
    let newPosts = posts.concat(testPost)
    setSpinner(false);
    setPosts(newPosts)
  }

  //for testing only
  const removeTestPost = id => posts.filter(ele => ele.id !== 100000);

  return (
    <div className="feed flex-column-center-center">
      {showSpinner ? <Spinner/> :
      <ul>
        {posts.length > 0 ?
        posts.map((post) => {
          return <li className="post-container" key={post.id}><Post id={post.id} title={post.title} rank={post.rank}/></li>
        })
        : null}

      </ul>}


      {/* for testing only */}
      <button id="add-test-post" style={{display: 'none'}} onClick={() => addTestPost()} ></button>
      <button id="remove-test-post" style={{display: 'none'}} onClick={() => removeTestPost()} ></button>

  </div>
  )
}
//
export default Feed;