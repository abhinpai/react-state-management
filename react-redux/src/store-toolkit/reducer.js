import { combineReducers } from 'redux';
import themeReducer from './theme';
import userReducer from './user';

export default combineReducers({
  theme: themeReducer,
  user: userReducer,
});
