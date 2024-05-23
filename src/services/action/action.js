import axios from "axios"
import { SuccessConfirmCode, SuccessCreateProduct, SuccessGetBanner, SuccessGetCategory, SuccessGetCountry, SuccessGetCurency, SuccessGetFild, SuccessGetPermition, SuccessGetTopProducts, SuccessGetUser, SuccessLogin, SuccessRegistr } from './successAction'
import { ErrorConfirmCode, ErrorCreateProduct, ErrorGetBanner, ErrorGetCategory, ErrorGetCountry, ErrorGetCurency, ErrorGetFild, ErrorGetPermition, ErrorGetTopProcut, ErrorGetUser, ErrorLogin, ErrorRegistr } from './errorAction'
import { StartConfirmCode, StartCreateProduct, StartGetBanner, StartGetCategory, StartGetCountry, StartGetCurrency, StartGetFild, StartGetPermition, StartGetTopProduct, StartGetuser, StartLogin, StartRegistr } from './startAction'
const appHostname = "https://detaldecor.digiluys.com/api"
const token = localStorage.getItem('token')



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
    'Accept-Language': 'am'
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
        dispatch(GetUserIfno())
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
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept-Language': 'am'
    }
  };

  return (dispatch) => {
    dispatch(StartLogin())
    axios.post(`${appHostname}/login`, data, config).then((data) => {
      if (data.data.status) {
        localStorage.setItem("token", data.data.token)
        dispatch(GetUserIfno())
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

export const GetUserIfno = () => {
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept-Language': 'am',
      'Authorization': `Bearer ${token}`
    }
  };

  return (dispatch) => {
    dispatch(StartGetuser())
    axios.get(`${appHostname}/auth_user_info`, config).then((data) => {
      if (data.data.status) {
        dispatch(SuccessGetUser(data.data.user))
      }
      else {
        dispatch(ErrorGetUser())
      }
    }).catch((error) => {
      dispatch(ErrorGetUser())
    })
  }
}

export const AddProductPermission = () => {
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept-Language': 'am',
      'Authorization': `Bearer ${token}`
    }
  };
  return (dispatch) => {
    dispatch(StartGetPermition())
    axios.post(`${appHostname}/validation_add_product_permission`, {}, config).then((data) => {
      console.log(data)
      if (data.data.status) {
        dispatch(SuccessGetPermition(data.data.message))
      }
      else {
        StatusAction("errorStatus", data.data.message)
        dispatch(ErrorGetPermition(data.data.message))
      }
    }).catch((error) => {
      console.log(error, 'error')
      dispatch(ErrorGetPermition())
    })
  }
}

export const Logout = () => {
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept-Language': 'am',
      'Authorization': `Bearer ${token}`
    }
  };
  localStorage.removeItem("token")
  return (dispatch) => {
    dispatch(StartGetPermition())
    axios.post(`${appHostname}/logout`, config).then((data) => {
      if (data.data.status) {

      }
      else {
      }
    }).catch((error) => {
    })
  }
}

export const GetFilds = (id) => {
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept-Language': 'am',
      'Authorization': `Bearer ${token}`
    }
  };
  return (dispatch) => {
    dispatch(StartGetFild())
    axios.get(`${appHostname}/get_category_fields?category_id=${id}`, config).then((data) => {
      if (data.data.status) {
        dispatch(SuccessGetFild(data.data.data))
      }
      else {
        dispatch(ErrorGetFild())
      }
    }).catch((error) => {
      console.log(error, '222')
      dispatch(ErrorGetFild())
    })
  }
}


export const GetCurrency = () => {
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept-Language': 'am',
      'Authorization': `Bearer ${token}`
    }
  };
  return (dispatch) => {
    dispatch(StartGetCurrency())
    axios.get(`${appHostname}/get_currency`, config).then((data) => {
      if (data.data.status) {
        dispatch(SuccessGetCurency(data.data.data))
      }
      else {
        dispatch(ErrorGetCurency())
      }
    }).catch((error) => {
      dispatch(ErrorGetCurency())
    })
  }
}



export const CloseStatus = (msg) => {
  return {
    type: 'CloseStatus',
    msg
  }
}


export const CreateProductApi = (data) => {
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept-Language': 'am',
      'Authorization': `Bearer ${token}`
    }
  };
  return (dispatch) => {
    dispatch(StartCreateProduct())
    axios.post(`${appHostname}/create_product`, data, config).then((data) => {
      console.log(data, "data")
      if (data.data.status) {
        dispatch(StatusAction("successStatus", data.data.message))
        dispatch(SuccessCreateProduct(data.data.message))
      }
      else {
        dispatch(StatusAction("errorStatus", data.data?.message))
        dispatch(ErrorCreateProduct())
      }
    }).catch((error) => {
      console.log(error)
      dispatch(StatusAction("errorStatus", data.data?.message))
      dispatch(ErrorGetPermition())
    })
  }
}


export const StatusAction = (type, msg) => {
  return {
    type: type,
    msg
  }
}