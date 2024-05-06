import axios from "axios"
import { SuccessGetCategory } from './successAction'
import { ErrorGetCategory } from './errorAction'
import { StartGetCategory } from './startAction'

export const GetCategory = () => {
  return (dispatch) => {
    dispatch(StartGetCategory())
    axios.get(`${process.env.NEXT_PUBLIC_APP_HOSTNAME}/get_category`).then((data) => {
      if (data.data.status) {
        dispatch(SuccessGetCategory(data.data.data))
      }
      else {
        dispatch(ErrorGetCategory("server errror"))
      }

    }).catch((error) => {
      dispatch(ErrorGetCategory("server errror"))
    })
  }
}