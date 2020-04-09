import { combineReducers } from 'redux';
import loginModalReducer from './loginModal'


const rootReducer = combineReducers({
  loginModal: loginModalReducer
})

export default rootReducer;

