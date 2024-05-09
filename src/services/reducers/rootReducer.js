import { combineReducers } from 'redux';
import GetCategoryReducer from './getCategoryReducer';
import getTopProductReducer from './getTopProductReducer'

const rootReducer = combineReducers({
  category: GetCategoryReducer,
  topProduct: getTopProductReducer,
});

export default rootReducer;