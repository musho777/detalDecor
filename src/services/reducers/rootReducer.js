import { combineReducers } from 'redux';
import GetCategoryReducer from '@/services/reducers/getCategoryReducer';
import GetTopProductReducer from '@/services/reducers/getTopProductReducer'
import GetBannerReducer from '@/services/reducers/getBannerReducer'
import GetCountryReducer from '@/services/reducers/getCountryReducer'
import RegistrReducer from '@/services/reducers/registrReducer.js'
import ConfirmCodeReducer from '@/services/reducers/ConfirmCodeReducer'
import LoginReducer from '@/services/reducers/LoginReducer'
import UserReducer from '@/services/reducers/userReducer'
import CreateProductPermission from '@/services/reducers/CreateProductPermission'
import GetFildReducer from '@/services/reducers/getFildReducer'
import GetCurencyReducer from '@/services/reducers/getCurencyReducer'
import StatusReducer from '@/services/reducers/statusReducer'
import createProductReducer from '@/services/reducers/createProductReducer'
import UpdateDataReducer from '@/services/reducers/UpdateDataReducer'
import ChangePasswordReducer from '@/services/reducers/changePasswordReducer'
import GetChartReducer from '@/services/reducers/GetChartReducer'
import GetProductReducer from '@/services/reducers/GetProductReducer'
import GetTopUserReducer from '@/services/reducers/GetTopUserReducer'


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
  createProduct: createProductReducer,
  updateData: UpdateDataReducer,
  chagenPassword: ChangePasswordReducer,
  getChart: GetChartReducer,
  products: GetProductReducer,
  getTopUser: GetTopUserReducer
});

export default rootReducer;