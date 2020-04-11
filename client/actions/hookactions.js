import axios from 'axios';
import { removeSources } from '../utls/index.js';
import store from '../store/index';
import { setToLocalStorage } from "../utls/index";
import {
  setShowLoginModal,
  setShowRegisterModal,
  setUser,
  setLoggedIn,
  setUserAlreadyExists,
  setUsername,
  setLoginError,
  setPassword,
  setPasswordConf,
  setPasswordMatch,
} from "../store/actions/index";

//  const state = store.getState()
const dispatch = (act) => store.dispatch(act)

const actions = {
  setShowLoginModal: (bool) => dispatch(setShowLoginModal(bool)),
  setShowRegisterModal: (bool) => dispatch(setShowRegisterModal(bool)),
  setUser: (value) => dispatch(setUser(value)),
  setLoggedIn: (bool) => dispatch(setLoggedIn(bool)),
  setUserAlreadyExists: (bool) => dispatch(setUserAlreadyExists(bool)),
  setUsername: (value) => dispatch(setUsername(value)),
  setLoginError: (bool) => dispatch(setLoginError(bool)),
  setPassword: (value) => dispatch(setPassword(value)),
  setPasswordConf: (value) => dispatch(setPasswordConf(value)),
  setPasswordMatch: (bool) => dispatch(setPasswordMatch(bool)),
}


export const getArticles  = async (setArticles) => {
  const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`);

  setArticles(removeSources(response.data.articles));
}

export const registerUser = async (username, password) => {
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

export const handleRegisterSubmit = async () => {
  const state = await store.getState()
  const user = state.user;
  if (user.username || (user.username && user.username.length > 0)) {
    if (user.password !== user.passwordConf) {
      actions.setPasswordMatch(false);
    } else {
      const response = await registerUser(user.username, user.password);
      if (response.data.error) {
        actions.setUserAlreadyExists(true);
      } else {
        login(response);
        actions.setShowRegisterModal(state.registerModal.showRegisterModal)
      }
    }
  } else {
    actions.setLoginError(true);
  }
};

const handleLoginSubmit = async () => {
  console.log('login submit');
  if (userName && password) {
    const response = await getUser(userName, password);
    if (response.data.error === "Wrong password") {
      actions.setLoginError(true);
    } else {
      login(response);
      actions.setShowLoginModal(showLoginModal)
    }
  } else {
    actions.setLoginError(true);
  }
};

function login(response) {
  console.log('login');
  actions.setUser(response.data.username);
  setToLocalStorage(response.data.token);
  actions.setPasswordMatch(true);
  actions.setUserAlreadyExists(false);
  actions.setUsername(null);
  actions.setPassword(null);
  actions.setPasswordConf(null);
  actions.setLoggedIn(true);
}

export default {
  getArticles, registerUser, getUser, getUserByToken, handleRegisterSubmit
}