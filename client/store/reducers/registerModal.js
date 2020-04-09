import * as actionTypes from '../constants/actionTypes';

const initialState = {
  showRegisterModal: false,
};

export default function registerModalReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SHOW_REGISTER_MODAL:
      return {
        ...state,
        showRegisterModal: action.payload
      };
    default:
      return state;
  }
}
