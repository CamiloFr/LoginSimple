import {combineReducers} from 'redux';
import user_token from './userReducer';

export default combineReducers({
  user: user_token,
});
