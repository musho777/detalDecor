import { combineReducers } from 'redux';
import GetCategoryReducer from './getCategoryReducer';
import GetTopProductReducer from './getTopProductReducer'
import GetBannerReducer from './getBannerReducer'

const rootReducer = combineReducers({
  category: GetCategoryReducer,
  topProduct: GetTopProductReducer,
  banner: GetBannerReducer
});

export default rootReducer;