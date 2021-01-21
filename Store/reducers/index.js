import {combineReducers} from 'redux';
import Auth from './auth';
import Restaurant from './restaurant';

export default combineReducers({
  auth: Auth,
  restaurant: Restaurant,
});
