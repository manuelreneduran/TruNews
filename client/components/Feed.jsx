import React, { useState, useEffect } from 'react'
import Post from './Post.jsx';
import axios from 'axios';

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await axios.get('/post/all');
      setPosts(posts.data)
    }
    fetchPosts();
  }, []);

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