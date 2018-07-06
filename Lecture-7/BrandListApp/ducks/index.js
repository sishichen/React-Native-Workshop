import { combineReducers } from 'redux';
import brandReducer from './brands';

export default combineReducers({
  brand: brandReducer
});
