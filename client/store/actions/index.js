import axios from "axios";
import { removeSources } from "../../utls/index";

import * as actionTypes from "../constants/actionTypes";

export function setShowLoginModal(payload) {
  return { type: actionTypes.SHOW_LOGIN_MODAL, payload: !payload };
}

export function setShowContactModal(payload) {
  return { type: actionTypes.SHOW_CONTACT_MODAL, payload: !payload };
}

export function setShowRegisterModal(payload) {
  return { type: actionTypes.SHOW_REGISTER_MODAL, payload: !payload };
}

export function setUser(payload) {
  return { type: actionTypes.USER, payload };
}

export function setUserAlreadyExists(payload) {
  return { type: actionTypes.USER_ALREADY_EXISTS, payload };
}

export function setLoginError(payload) {
  return { type: actionTypes.LOGIN_ERROR, payload };
}

export function setUsername(payload) {
  return { type: actionTypes.USERNAME, payload };
}

export function setPassword(payload) {
  return { type: actionTypes.PASSWORD, payload };
}

export function setPasswordConf(payload) {
  return { type: actionTypes.PASSWORD_CONF, payload };
}

export function setPasswordMatch(payload) {
  return { type: actionTypes.PASSWORD_MATCH, payload };
}

export function setLoggedIn(payload) {
  return { type: actionTypes.LOGGED_IN, payload };
}

export function setArticles(payload) {
  return { type: actionTypes.SET_ARTICLES, payload };
}

export function setSavedArticles(payload) {
  return { type: actionTypes.SET_SAVED_ARTICLES, payload };
}

export function setSavedAfterDelete(payload) {
  return { type: actionTypes.SET_SAVED_AFTER_DELETE, payload };
}

export function getData() {
  return (dispatch) => {
    return axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
          process.env.NEWS_API_KEY || NEWS_API_KEY
        }`
      )
      .then((res) => removeSources(res.data.articles))
      .then((res) => dispatch(setArticles(res)));
  };
}

export function saveArticle(article, user) {
  return (dispatch) => {
    return axios
      .post("/saved-articles", { article, username: user })
      .then((res) => {
        dispatch(setSavedArticles(res.data.saved_articles));
      });
  };
}

export function getSavedArticles(username) {
  return (dispatch) => {
    return axios.post("/saved-articles/get-all", { username }).then((res) => {
      dispatch(setSavedArticles(res.data.saved_articles));
    });
  };
}

export function deleteSavedArticle(article, username) {
  return (dispatch) => {
    return axios
      .post("/saved-articles/delete", { article, username })
      .then((res) => {
        dispatch(setSavedAfterDelete(res.data.saved_articles));
      });
  };
}
