const initialState = {
  loading: false,
  data: [],
  error: "",
};
const createProductReducer = (state = initialState, action) => {
  let temp = { ...state }
  switch (action.type) {
    case 'StartCreateProduct':
      temp.data = []
      temp.loading = true
      temp.error = ""
      break;
    case 'SuccessCreateProduct':
      temp.data = action.data
      temp.error = ""
      temp.loading = false
      break;
    case 'ErrorCreateProduct':
      temp.data = action.data
      temp.error = action.error
      temp.loading = false
      break;
    default:
      return temp;
  }
  return temp;


};
export default createProductReducer;