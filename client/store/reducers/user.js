import * as actionTypes from "../constants/actionTypes";

const initialState = {
  user: null,
  userAlreadyExists: false,
  username: null,
  password: null,
  passwordConf: null,
  passwordMatch: true,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.USER:
      return {
        ...state,
        user: action.payload,
      };
    case actionTypes.USER_ALREADY_EXISTS:
      return {
        ...state,
        userAlreadyExists: action.payload,
      };
    case actionTypes.USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    case actionTypes.PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case actionTypes.PASSWORD_CONF:
      return {
        ...state,
        passwordConf: action.payload,
      };
    case actionTypes.PASSWORD_MATCH:
      return {
        ...state,
        passwordMatch: action.payload,
      };
    default:
      return state;
  }
}
