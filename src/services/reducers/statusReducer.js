const initialState = {
  show: false,
  msg: "",
  type: ""
};
const StatusReducer = (state = initialState, action) => {
  let temp = { ...state }
  switch (action.type) {
    case 'successStatus':
      temp.show = true
      temp.msg = action.msg
      temp.type = "success"
      break;
    case 'errorStatus':
      temp.show = true
      temp.msg = action.msg
      temp.type = "error"
      break;
    case 'CloseStatus':
      temp.show = false
      temp.msg = ""
      temp.type = ""
      break;
    default:
      return temp;
  }
  return temp;


};
export default StatusReducer;