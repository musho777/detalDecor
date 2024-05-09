const initialState = {
  loading: true,
  data: [],
  error: ""
};
const GetBannerReducer = (state = initialState, action) => {
  let temp = { ...state }
  switch (action.type) {
    case 'StartGetBanner':
      temp.data = []
      temp.loading = true
      temp.error = ""
      break;
    case 'SuccessGetBanner':
      temp.data = action.data
      temp.error = ""
      temp.loading = false
      break;
    case 'ErrorGetBanner':
      temp.data = []
      temp.error = action.error
      temp.loading = false
      break;
    default:
      return temp;
  }
  return temp;


};
export default GetBannerReducer;