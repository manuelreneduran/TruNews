import * as actionTypes from '../constants/actionTypes';

const initialState = {
  loginError: false,
  loggedIn: false
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_ERROR:
      return {
        ...state,
        loginError: action.payload
      };
    case actionTypes.LOGGED_IN:
      return {
        ...state,
        loggedIn: action.payload
      }
    default:
      return state;
  }
}
