const initialState = {
  loading: true,
  data: [],
  error: ""
};
const GetTopUserReducer = (state = initialState, action) => {
  let temp = { ...state }
  switch (action.type) {
    case 'StartGetTopUser':
      temp.data = []
      temp.loading = true
      temp.error = ""
      break;
    case 'SuccessGetTopUser':
      temp.data = action.data
      temp.error = ""
      temp.loading = false
      break;
    case 'ErrorGetTopUser':
      temp.data = []
      temp.error = action.error
      temp.loading = false
      break;
    default:
      return temp;
  }
  return temp;


};
export default GetTopUserReducer;