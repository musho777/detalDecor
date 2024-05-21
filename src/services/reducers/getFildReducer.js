const initialState = {
  loading: true,
  data: [],
  error: ""
};
const GetFildReducer = (state = initialState, action) => {
  let temp = { ...state }
  switch (action.type) {
    case 'StartGetFild':
      temp.data = []
      temp.loading = true
      temp.error = ""
      break;
    case 'SuccessGetFild':
      temp.data = action.data
      temp.error = ""
      temp.loading = false
      break;
    case 'ErrorGetFild':
      temp.data = []
      temp.error = action.error
      temp.loading = false
      break;
    default:
      return temp;
  }
  return temp;


};
export default GetFildReducer;