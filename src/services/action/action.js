import axios from "axios"
import { SuccessGetBanner, SuccessGetCategory, SuccessGetCountry, SuccessGetTopProducts } from './successAction'
import { ErrorGetBanner, ErrorGetCategory, ErrorGetCountry, ErrorGetTopProcut } from './errorAction'
import { StartGetBanner, StartGetCategory, StartGetCountry, StartGetTopProduct } from './startAction'
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
export const GetCountry = () => {
  const headers = {
    'Content-Type': 'application/json',
    'Accept-Language': 'ru'
  };
  return (dispatch) => {
    dispatch(StartGetCountry())
    axios.get(`${appHostname}/get_country`, { headers }).then((data) => {
      if (data.data.status) {
        dispatch(SuccessGetCountry(data.data.data))
      }
      else {
        dispatch(ErrorGetCountry("server errror"))
      }

    }).catch((error) => {
      dispatch(ErrorGetCountry("server errror"))
    })
  }
}

export const Register = (data) => {
  const headers = {
    'Content-Type': 'application/json',
    'Accept-Language': 'ru'
  };

  return (dispatch) => {
    dispatch(StartGetCountry())
    axios.post(`${appHostname}/register`, data).then((data) => {
      console.log(data)
      if (data.data.status) {
        console.log(data)
        // dispatch(SuccessGetCountry(data.data.data))
      }
      else {
        // dispatch(ErrorGetCountry("server errror"))
      }

    }).catch((error) => {
      console.log(error)
      // dispatch(ErrorGetCountry("server errror"))
    })
  }
}