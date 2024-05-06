import { combineReducers } from 'redux';
import GetCategoryReducer from './getCategoryReducer';

const rootReducer = combineReducers({
  category: GetCategoryReducer,
});

export default rootReducer;