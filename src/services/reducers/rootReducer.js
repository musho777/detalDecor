import { combineReducers } from 'redux';
import GetCategoryReducer from './getCategoryReducer';
import GetTopProductReducer from './getTopProductReducer'
import GetBannerReducer from './getBannerReducer'
import GetCountryReducer from './getCountryReducer'
import RegistrReducer from './RegistrReducer'
import ConfirmCodeReducer from './ConfirmCodeReducer'
import LoginReducer from './LoginReducer'
import UserReducer from './userReducer'
import CreateProductPermission from './CreateProductPermission'
import GetFildReducer from './getFildReducer'
import GetCurencyReducer from './getCurencyReducer'
import StatusReducer from './statusReducer'
import createProductReducer from './createProductReducer'


const rootReducer = combineReducers({
  category: GetCategoryReducer,
  topProduct: GetTopProductReducer,
  banner: GetBannerReducer,
  country: GetCountryReducer,
  registr: RegistrReducer,
  confrimCode: ConfirmCodeReducer,
  loginState: LoginReducer,
  user: UserReducer,
  permission: CreateProductPermission,
  getFild: GetFildReducer,
  curency: GetCurencyReducer,
  status: StatusReducer,
  createProduct: createProductReducer
});

export default rootReducer;