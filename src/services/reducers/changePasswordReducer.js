const initialState = {
  loading: false,
  data: [],
  error: "",
  status: false
};
const ChangePasswordReducer = (state = initialState, action) => {
  let temp = { ...state }
  switch (action.type) {
    case 'StartChangePassword':
      temp.data = []
      temp.loading = true
      temp.error = ""
      temp.status = false
      break;
    case 'SucccessChangePassword':
      temp.data = action.data
      temp.error = ""
      temp.loading = false
      temp.status = true
      break;
    case 'ErrorChangePassword':
      temp.data = []
      temp.error = action.error
      temp.loading = false
      temp.status = false
      break;
    default:
      return temp;
  }
  return temp;


};
export default ChangePasswordReducer;