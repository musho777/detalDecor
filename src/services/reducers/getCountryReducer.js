const initialState = {
  loading: true,
  data: [],
  error: ""
};
const GetCountryReducer = (state = initialState, action) => {
  let temp = { ...state }
  switch (action.type) {
    case 'StartGetCountry':
      temp.data = []
      temp.loading = true
      temp.error = ""
      break;
    case 'SuccessGetCountry':
      temp.data = action.data
      temp.error = ""
      temp.loading = false
      break;
    case 'ErrorGetCountry':
      temp.data = []
      temp.error = action.error
      temp.loading = false
      break;
    default:
      return temp;
  }
  return temp;


};
export default GetCountryReducer;