const initialState = {
    loading: true,
    data: [],
    error: ""
};
const GetCategoryReducer = (state = initialState, action) => {
    let temp = { ...state }
    switch (action.type) {
        case 'StartGetCategory':
            temp.data = []
            temp.loading = true
            temp.error = ""
            break;
        case 'SuccessGetCategory':
            temp.data = action.data
            temp.error = ""
            temp.loading = false
            break;
        case 'ErrorGetCategory':
            temp.data = []
            temp.error = action.error
            temp.loading = false
            break;
        default:
            return temp;
    }
    return temp;


};
export default GetCategoryReducer;