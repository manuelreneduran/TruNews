import React, { useState, useEffect } from 'react'
import Post from './Post.jsx';
import axios from 'axios';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await axios.get('/post/all');
      setPosts(posts.data)
    }
    fetchPosts();
  }, []);

  //for testing only
  function addTestPost() {
    let testPost = {
      title: "this is a set post",
      id: 100000
    }
    let newPosts = posts.concat(testPost)
    setPosts(newPosts)
  }

  //for testing only
  function removeTestPost() {
    let newPosts = posts

  }

  return (
    <div className="feed">
      <ul>
        {posts.length > 0 ?
        posts.map((post) => {
          return <li key={post.id}><Post id={post.id} title={post.title}/></li>
        })
        : false}

      </ul>
  </div>
  )
//
}

export default Feed;