import axios from "axios"

export const GetCategory = () => {
  return (dispatch) => {
    axios.get("https://detaldecor.digiluys.com/api/get_category_fields").then((data) => {
      console.log(data)
    }).catch((error) => {
      console.log(error)
    })
  }
}