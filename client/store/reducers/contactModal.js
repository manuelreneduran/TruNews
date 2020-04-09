import * as actionTypes from '../constants/actionTypes';

const initialState = {
  showContactModal: false,
};

export default function contactModalReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SHOW_CONTACT_MODAL:
      return {
        ...state,
        showContactModal: action.payload
      };
    default:
      return state;
  }
}
