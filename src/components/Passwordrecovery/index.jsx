"use client"
import Auth from '../Auth/index'
import { useState } from 'react'
const Passwordrecovery = () => {
  const [data, setData] = useState([
    { type: 'email', placeholder: 'Электронная почта' },
  ])
  return <Auth
    accept={false}
    input={data}
    title="Восстановление пароля"
    description={"Введите адрес электронной почты, который вы указали при регистрации, и мы отправим вам письмо со ссылкой для сброса пароля."}
  />
}

export default Passwordrecovery