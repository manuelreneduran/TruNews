import { combineReducers } from 'redux';
import loginModalReducer from './loginModal'
import contactModalReducer from './contactModal';
import registerModalReducer from './registerModal';
import userReducer from './user';
import loginReducer from './login';
import articlesReducer from './articles';


const rootReducer = combineReducers({
  loginModal: loginModalReducer,
  contactModal: contactModalReducer,
  registerModal: registerModalReducer,
  user: userReducer,
  login: loginReducer,
  articles: articlesReducer
})

export default rootReducer;

