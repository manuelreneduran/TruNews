import * as actionTypes from '../constants/actionTypes';

const initialState = {
  showLoginModal: false,
};

export default function loginModalReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SHOW_LOGIN_MODAL:
      return {
        ...state,
        showLoginModal: action.payload
      };
    default:
      return state;
  }
}
