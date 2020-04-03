import axios from 'axios';

export let getPosts  = async (setPosts) => {
  const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`);
  setPosts(response.data.articles);
}

// export default for easy mocking

export default {
  getPosts
}