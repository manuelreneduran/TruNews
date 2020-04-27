import * as actionTypes from "../constants/actionTypes";

const initialState = {
  articles: [],
  savedArticles: [],
};

export default function articlesReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_ARTICLES:
      return {
        ...state,
        articles: state.articles.concat(action.payload),
      };
    case actionTypes.SET_SAVED_ARTICLES:
      return {
        ...state,
        savedArticles: action.payload,
      };
    case actionTypes.SET_SAVED_AFTER_DELETE:
      return {
        ...state,
        savedArticles: action.payload,
      };
    default:
      return state;
  }
}
