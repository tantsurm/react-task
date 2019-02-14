import { combineReducers } from 'redux';

import auth from './auth';
import authStatus from './authStatus';
import list from './list';
import user from './user';

export default combineReducers({
  auth,
  authStatus,
  list,
  user,
});
