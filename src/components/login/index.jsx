"use client"
import Auth from '../Auth/index'
import { useState } from 'react'
const Login = ({ close, open, changeModal }) => {
  const [data, setData] = useState([
    { type: 'email', placeholder: 'Электронная почта' },
    { type: 'password', placeholder: 'Электронная почта' },
  ])
  return <Auth type={"login"} changeModal={changeModal} open={open} close={close} remember input={data} title="Войти в личный кабинет" />
}

export default Login