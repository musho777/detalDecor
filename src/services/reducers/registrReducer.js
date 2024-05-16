const initialState = {
  loading: false,
  status: '',
  error: {},
};
const RegistrReducer = (state = initialState, action) => {
  let temp = { ...state }
  switch (action.type) {
    case 'StartRegistr':
      temp.status = false
      temp.loading = true
      temp.error = {}
      break;
    case 'SuccessRegistr':
      temp.status = true
      temp.error = ""
      temp.loading = false
      break;
    case 'ErrorRegistr':
      temp.status = false
      temp.error = action.error
      temp.loading = false
      break;
    case 'ClearRegistrSgtatus':
      temp.status = false
      temp.error = {}
      temp.loading = false
    default:
      return temp;
  }
  return temp;


};
export default RegistrReducer;