import axios from "axios"
import { SuccessConfirmCode, SuccessGetBanner, SuccessGetCategory, SuccessGetCountry, SuccessGetTopProducts, SuccessLogin, SuccessRegistr } from './successAction'
import { ErrorConfirmCode, ErrorGetBanner, ErrorGetCategory, ErrorGetCountry, ErrorGetTopProcut, ErrorLogin, ErrorRegistr } from './errorAction'
import { StartConfirmCode, StartGetBanner, StartGetCategory, StartGetCountry, StartGetTopProduct, StartLogin, StartRegistr } from './startAction'
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
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept-Language': 'am'
    }
  };
  return (dispatch) => {

    dispatch(StartRegistr())
    axios.post('https://detaldecor.digiluys.com/api/register', data, config).then((data) => {
      if (data.data.status) {
        dispatch(SuccessRegistr())
      }
      else {
        dispatch(ErrorRegistr(data.data.data))
      }

    }).catch((error) => {
      dispatch(ErrorRegistr(data.data.data))
    })
  }
}

export const ConfirmMail = (data) => {
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept-Language': 'am'
    }
  };

  return (dispatch) => {
    dispatch(StartConfirmCode())
    axios.post(`${appHostname}/confirm_register`, data, config).then((data) => {
      if (data.data.status) {
        console.log(data)
        localStorage.setItem("token", data.data.token)
        dispatch(SuccessConfirmCode())
      }
      else {
        dispatch(ErrorConfirmCode())
      }
    }).catch((error) => {
      dispatch(ErrorConfirmCode(error.response.data.message))
    })
  }
}

export const ClearConfirmCode = () => {
  return {
    type: 'ClearConfirmCode'
  }
}
export const ClearRegistrSgtatus = () => {
  return {
    type: 'ClearRegistrSgtatus'
  }
}


export const ReSendConfirmCode = (data) => {
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept-Language': `am`
    }
  };

  return (dispatch) => {
    axios.post(`${appHostname}/resend_code_for_register`, data, config).then((data) => {
      if (data.data.status) {
        console.log(data)
      }
    }).catch((error) => {
    })
  }
}


export const LoginAction = (data) => {
  console.log(data)
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept-Language': 'am'
    }
  };

  return (dispatch) => {
    dispatch(StartLogin())
    axios.post(`${appHostname}/login`, data, config).then((data) => {
      console.log(data)
      if (data.data.status) {
        localStorage.setItem("token", data.data.token)
        dispatch(SuccessLogin(data.data))
      }
      else {
        dispatch(ErrorLogin())
      }
    }).catch((error) => {
      dispatch(ErrorLogin("error"))
    })
  }
}

export const ClearLogin = () => {
  return {
    type: 'ClearLogin'
  }
}