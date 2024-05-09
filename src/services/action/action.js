import axios from "axios"
import { SuccessGetBanner, SuccessGetCategory, SuccessGetTopProducts } from './successAction'
import { ErrorGetBanner, ErrorGetCategory, ErrorGetTopProcut } from './errorAction'
import { StartGetBanner, StartGetCategory, StartGetTopProduct } from './startAction'
const appHostname = "https://detaldecor.digiluys.com/api"

export const GetCategory = () => {
  const headers = {
    'Content-Type': 'application/json',
    'Accept-Language': 'ru'
  };

  return (dispatch) => {
    dispatch(StartGetCategory())
    axios.get(`${appHostname}/get_category`, { headers }).then((data) => {
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


export const GetTopProduct = () => {
  const headers = {
    'Content-Type': 'application/json',
    'Accept-Language': 'ru'
  };

  return (dispatch) => {
    dispatch(StartGetTopProduct())
    axios.get(`${appHostname}/get_top_products`, { headers }).then((data) => {
      if (data.data.status) {
        dispatch(SuccessGetTopProducts(data.data.data))
      }
      else {
        dispatch(ErrorGetTopProcut("server errror"))
      }

    }).catch((error) => {
      dispatch(ErrorGetTopProcut("server errror"))
    })
  }
}
export const GetBanner = () => {
  const headers = {
    'Content-Type': 'application/json',
    'Accept-Language': 'ru'
  };

  return (dispatch) => {
    dispatch(StartGetBanner())
    axios.get(`${appHostname}/get_banners`, { headers }).then((data) => {
      if (data.data.status) {
        dispatch(SuccessGetBanner(data.data.data))
      }
      else {
        dispatch(ErrorGetBanner("server errror"))
      }

    }).catch((error) => {
      dispatch(ErrorGetBanner("server errror"))
    })
  }
}