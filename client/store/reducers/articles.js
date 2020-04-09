import * as actionTypes from '../constants/actionTypes';

const initialState = {
  articles: [],
};

export default function articlesReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ARTICLES:
      return {
        ...state,
        articles: state.articles.concat(action.payload)
      };
    default:
      return state;
  }
}
