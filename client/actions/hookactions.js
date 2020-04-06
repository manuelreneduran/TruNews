import axios from 'axios';
import { removeSources, setToLocalStorage } from '../utls/index.js';

export const getArticles  = async (setArticles) => {
  const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`);

  setArticles(removeSources(response.data.articles));
}

export const registerUser = async (username, password, setUser, setUserExists, showSuccesfulReg) => {
  const response = await axios.post('/signup', { password, username } )
  if (response.data.user.code) {
    setUserExists(true);
  } else {
    setUser(response.data.user.username);
    setToLocalStorage(response.data.user.token)
    showSuccesfulReg();
  }
}


export const getUserByToken = async (setUser) => {
  const token = localStorage.getItem('token');
  const response = await axios.post('/signin/token', { token })
  if (response.data.token) {
    setUser(response.data.username)
  }
  console.log(response);
}

export default {
  getArticles, registerUser, getUserByToken
}