"use client"
import Auth from '../Auth/index'
import { useState } from 'react'
const Registr = () => {
  const [data, setData] = useState([
    { type: 'email', placeholder: 'Электронная почта' },
    { type: 'password', placeholder: 'Электронная почта' },
    { type: 'password', placeholder: 'Электронная почта' },
  ])
  return <Auth input={data} title="Регистрация" />
}

export default Registr