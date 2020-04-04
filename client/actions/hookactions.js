import axios from 'axios';
import { removeSources } from '../utls/index.js';

export let getArticles  = async (setArticles) => {
  const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`);

  setArticles(removeSources(response.data.articles));
}

// export default for easy mocking

export default {
  getArticles
}