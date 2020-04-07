import axios from 'axios';
import { removeSources } from '../utls/index.js';

export const getArticles  = async (setArticles) => {
  const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`);

  setArticles(removeSources(response.data.articles));
}

export const registerUser = async (username, password, setUser, setUserExists) => {
  const response = await axios.post('/signup', { password, username } )
  return response;
}

export const getUser = async (username, password) => {
  const response = await axios.post('/signin', {username, password})
  return response;
}

export const getUserByToken = async (setUser, setLoggedIn) => {
  const token = localStorage.getItem('token');
  const response = await axios.post('/signin/token', { token })
  if (response.data.token) {
    setUser(response.data.username)
    setLoggedIn(true);
  }
}

export default {
  getArticles, registerUser, getUser, getUserByToken
}