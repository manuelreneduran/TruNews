import React, { useState, useEffect } from 'react'
import Post from './Post.jsx';
import axios from 'axios';

export default function Feed() {
  const [posts, setPosts] = useState([{title: ''}]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await axios.get('/post/all');
      setPosts(posts.data[0])
    }
    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <p>{posts.id}</p>
      <p>{posts.title}</p>
    <Post/>
  </div>
  )

}