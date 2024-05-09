const initialState = {
  loading: true,
  data: [],
  error: ""
};
const getTopProductReducer = (state = initialState, action) => {
  let temp = { ...state }
  switch (action.type) {
    case 'StartGetTopProduct':
      temp.data = []
      temp.loading = true
      temp.error = ""
      break;
    case 'SuccessGetTopProducts':
      temp.data = action.data
      temp.error = ""
      temp.loading = false
      break;
    case 'ErrorGetTopProcut':
      temp.data = []
      temp.error = action.error
      temp.loading = false
      break;
    default:
      return temp;
  }
  return temp;


};
export default getTopProductReducer;