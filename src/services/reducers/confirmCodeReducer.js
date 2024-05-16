const initialState = {
  loading: false,
  status: '',
  error: "",
};
const ConfirmCodeReducer = (state = initialState, action) => {
  let temp = { ...state }
  switch (action.type) {
    case 'StartConfirmCode':
      temp.status = false
      temp.loading = true
      temp.error = ""
      break;
    case 'SuccessConfirmCode':
      temp.status = true
      temp.error = ""
      temp.loading = false
      break;
    case 'ErrorConfirmCode':
      temp.status = false
      temp.error = action.error
      temp.loading = false
      break;
    case 'ClearConfirmCode':
      temp.status = false
      temp.error = ""
      temp.loading = false
    default:
      return temp;
  }
  return temp;


};
export default ConfirmCodeReducer;