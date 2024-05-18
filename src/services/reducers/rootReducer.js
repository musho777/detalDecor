import { combineReducers } from 'redux';
import GetCategoryReducer from './getCategoryReducer';
import GetTopProductReducer from './getTopProductReducer'
import GetBannerReducer from './getBannerReducer'
import GetCountryReducer from './getCountryReducer'
import RegistrReducer from './RegistrReducer'
import ConfirmCodeReducer from './ConfirmCodeReducer'
import LoginReducer from './LoginReducer'
import UserReducer from './userReducer'


const rootReducer = combineReducers({
  category: GetCategoryReducer,
  topProduct: GetTopProductReducer,
  banner: GetBannerReducer,
  country: GetCountryReducer,
  registr: RegistrReducer,
  confrimCode: ConfirmCodeReducer,
  loginState: LoginReducer,
  user: UserReducer
});

export default rootReducer;