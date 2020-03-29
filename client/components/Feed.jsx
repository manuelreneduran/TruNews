import React from 'react'
import Post from './Post.jsx';
import axios from 'axios';
import { sortBy } from '../helpers/index.js'
import Spinner from './Spinner.jsx';

const Feed = () => {
  const [posts, setPosts] = React.useState(null);
  const [sort, setSort] = React.useState('top');

  React.useEffect(() => {
    const fetchPosts = () => {
      axios.get('/post/all')
      .then((res) => {
        setPosts(sortBy(res.data, sort))
      })
      .catch(err => {
        throw new Error(`error fetching posts: ${err}`)
      })
    }
    fetchPosts();
  }, []);


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