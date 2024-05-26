const initialState = {
  loading: true,
  data: [],
  error: ""
};
const GetChartReducer = (state = initialState, action) => {
  let temp = { ...state }
  switch (action.type) {
    case 'StartGetChart':
      temp.data = []
      temp.loading = true
      temp.error = ""
      break;
    case 'SuccessGetChart':
      temp.data = action.data
      temp.error = ""
      temp.loading = false
      break;
    case 'ErrorGetChart':
      temp.data = []
      temp.error = action.error
      temp.loading = false
      break;
    default:
      return temp;
  }
  return temp;


};
export default GetChartReducer;