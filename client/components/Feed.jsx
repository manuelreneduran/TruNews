import React from 'react'
import Post from './Post.jsx';
import axios from 'axios';
import Spinner from './Spinner.jsx';
import hookactions from '../actions/hookactions';

const Feed = () => {
  const [posts, setPosts] = React.useState(null);
  const [sort, setSort] = React.useState('top');

  const fetchPosts = () => {
    hookactions.getPosts(setPosts, sort)
  }

  React.useEffect(() => { fetchPosts() }, []);


  return (
    <div className="feed flex-column-center-center" data-test="component-feed">
      {!posts ? <div data-test="spinner"><Spinner/></div> :
      <ul data-test="posts">
        { posts.map((post) => {
          return <li data-test="post" key={post.id}><Post id={post.id} title={post.title} rank={post.rank}/></li>
        }) }
      </ul>}
  </div>
  )
}

export default Feed;