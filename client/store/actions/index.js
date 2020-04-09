import * as actionTypes from '../constants/actionTypes';

export function setShowLoginModal(payload) {
  return { type: actionTypes.SHOW_LOGIN_MODAL, payload: !payload }
};