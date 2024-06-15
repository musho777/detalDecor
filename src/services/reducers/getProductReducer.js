const initialState = {
  loading: true,
  data: [],
  error: ""
};
const GetProductReducer = (state = initialState, action) => {
  let temp = { ...state }
  switch (action.type) {
    case 'StartGetProduct':
      temp.data = []
      temp.loading = true
      temp.error = ""
      break;
    case 'SuccessGetProduct':
      temp.data = action.data
      temp.error = ""
      temp.loading = false
      break;
    case 'ErrorGetProcut':
      temp.data = []
      temp.error = action.error
      temp.loading = false
      break;
    default:
      return temp;
  }
  return temp;


};
export default GetProductReducer;