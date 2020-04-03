import axios from 'axios';

export let getArticles  = async (setArticles) => {
  const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`);
  setArticles(response.data.articles);
}

// export default for easy mocking

export default {
  getArticles
}