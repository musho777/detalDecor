import { combineReducers } from 'redux';
import GetCategoryReducer from './getCategoryReducer';

const rootReducer = combineReducers({
  category: GetCategoryReducer, // Renamed to camelCase convention
});

export default rootReducer;