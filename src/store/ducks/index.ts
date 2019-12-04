import { combineReducers } from 'redux';
import { authReducer } from 'store/ducks/auth';

export const rootReducer = combineReducers({
  auth: authReducer,
});
