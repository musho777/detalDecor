const initialState = {
  loading: false,
  status: '',
  data: [],
  error: "",
};
const UserReducer = (state = initialState, action) => {
  let temp = { ...state }
  switch (action.type) {
    case 'StartGetuser':
      temp.status = false
      temp.loading = true
      temp.error = ""
      // temp.data = []
      break;
    case 'SuccessGetUser':
      temp.status = true
      temp.error = ""
      temp.loading = false
      temp.data = action.data
      break;
    case 'ErrorGetUser':
      temp.status = false
      temp.error = action.error
      temp.loading = false
      temp.data = []
      break;
    default:
      return temp;
  }
  return temp;


};
export default UserReducer;