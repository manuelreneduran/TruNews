import React, { useState, useEffect } from 'react'
import Post from './Post.jsx';
import axios from 'axios';

export default function Feed() {
  const [posts, setPosts] = useState([{title: 'place', id: 'holder'}]);

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
        {posts.map((post) => {
          console.log(post);
          return <li key={post.id}><Post data={post}/></li>
        })}
      </ul>
  </div>
  )

}