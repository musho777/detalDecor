const initialState = {
  loading: false,
  status: false,
  error: ""
};
const LoginReducer = (state = initialState, action) => {
  let temp = { ...state }
  switch (action.type) {
    case 'StartLogin':
      temp.status = false
      temp.loading = true
      temp.error = ""
      break;
    case 'SuccessLogin':
      temp.status = true
      temp.error = ""
      temp.loading = false
      break;
    case 'ErrorLogin':
      temp.status = false
      temp.error = action.error
      temp.loading = false
      break;
    case 'ClearLogin':
      temp.status = false
      temp.error = ""
      temp.loading = false
      break
    default:
      return temp;
  }
  return temp;


};
export default LoginReducer;