const initialState = {
  loading: true,
  data: [],
  error: ""
};
const GetCurencyReducer = (state = initialState, action) => {
  let temp = { ...state }
  switch (action.type) {
    case 'StartGetCurrency':
      temp.data = []
      temp.loading = true
      temp.error = ""
      break;
    case 'SuccessGetCurency':
      temp.data = action.data
      temp.error = ""
      temp.loading = false
      break;
    case 'ErrorGetCurency':
      temp.data = []
      temp.error = action.error
      temp.loading = false
      break;
    default:
      return temp;
  }
  return temp;


};
export default GetCurencyReducer;