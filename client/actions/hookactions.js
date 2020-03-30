import axios from 'axios';

export const getPosts  = async () => {
  const response = await axios.get('/post/all')
  return response.data;
}

// export default for easy mocking

export default {
  getPosts
}