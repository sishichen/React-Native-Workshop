import { combineReducers } from 'redux';
import brandReducer from './brandReducer';

export default combineReducers({
  brand: brandReducer
});

