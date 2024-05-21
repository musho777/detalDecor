const initialState = {
  loading: true,
  data: "",
  permision: "",
  error: "",
};
const CreateProductPermission = (state = initialState, action) => {
  let temp = { ...state }
  switch (action.type) {
    case 'StartGetPermition':
      temp.data = []
      temp.loading = true
      temp.error = ""
      temp.permision = "forbid"
      break;
    case 'SuccessGetPermition':
      console.log(action.data, 'action.data')
      temp.data = action.data
      temp.error = ""
      temp.loading = false
      temp.permision = "allow"
      break;
    case 'ErrorGetPermition':
      temp.data = action.data
      temp.error = action.error
      temp.loading = false
      temp.permision = "forbid"
      break;
    default:
      return temp;
  }
  return temp;


};
export default CreateProductPermission;