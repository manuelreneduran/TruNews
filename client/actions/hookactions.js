import axios from 'axios';
import { removeSources } from '../utls/index.js';

export let getArticles  = async (setArticles) => {
  const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`);

  setArticles(removeSources(response.data.articles));
}

export let registerUser = async (username, password, setUser) => {
  const response = await axios.post('/signup')

  setUser(response);
}


export default {
  getArticles
}