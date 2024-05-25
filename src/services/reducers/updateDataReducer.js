const initialState = {
  loading: false,
  status: '',
  error: {},
};
const UpdateDataReducer = (state = initialState, action) => {
  let temp = { ...state }
  switch (action.type) {
    case 'StartUpdateData':
      temp.status = false
      temp.loading = true
      temp.error = {}
      break;
    case 'SuccessUpdateData':
      temp.status = true
      temp.error = ""
      temp.loading = false
      break;
    case 'ErrorUpdateData':
      temp.status = false
      temp.error = action.error
      temp.loading = false
      break;
    default:
      return temp;
  }
  return temp;


};
export default UpdateDataReducer;