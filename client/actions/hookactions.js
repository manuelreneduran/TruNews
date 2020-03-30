import axios from 'axios';
import { sortBy } from '../helpers/index';

export let getPosts  = async (setPosts, sort) => {
  const response = await axios.get('/post/all')
  setPosts(sortBy(response.data, sort));
}

// export default for easy mocking

export default {
  getPosts
}