import React, { useState, useEffect } from 'react'
import Post from './Post.jsx';
import axios from 'axios';
import { sortBy } from '../helpers/index.js'

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [sort, setSort] = useState('top');

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await axios.get('/post/all');
      setPosts(sortBy(posts.data, sort))
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
    setPosts(newPosts)
  }

  //for testing only
  const removeTestPost = id => posts.filter(ele => ele.id !== 100000);

  return (
    <div className="feed">
      <ul>
        {posts.length > 0 ?
        posts.map((post) => {
          return <li key={post.id}><Post id={post.id} title={post.title} rank={post.rank}/></li>
        })
        : false}

      </ul>

      {/* for testing only */}
      <button id="add-test-post" style={{display: 'none'}} onClick={() => addTestPost()} ></button>
      <button id="remove-test-post" style={{display: 'none'}} onClick={() => removeTestPost()} ></button>

  </div>
  )
}
//
export default Feed;