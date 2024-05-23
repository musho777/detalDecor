"use client"
import { useDispatch, useSelector } from 'react-redux'
import Auth from '../Auth/index'
import { useEffect, useState } from 'react'
import UIInput from '@/UI/input'
import UIButton from '@/UI/button'
import CheckBox from '@/UI/checkbox'
import './style.css'
import { ClearLogin, LoginAction } from '@/services/action/action'
import { ValidateEmail } from '@/functions/emailValidation'
const Login = ({ close, open, changeModal }) => {
  const dispatch = useDispatch()
  const loginState = useSelector((st) => st.loginState)
  const [email, setEmail] = useState({ value: "", error: "" })
  const [password, setPassword] = useState({ value: "", error: "" })
  const [error, setError] = useState("")
  const [allow, setAllow] = useState(false)
  useEffect(() => {
    dispatch(ClearLogin())
  }, [])

  const SendData = () => {
    setError("")
    let send = true
    if (!ValidateEmail(email.value)) {
      send = false
      setEmail({ ...email, error: "mailError" })
    }
    else {
      setEmail({ ...email, error: "" })
    }
    if (password.value.length < 8) {
      send = false
      setPassword({ ...password, error: "passwordError" })
    }
    else {
      setPassword({ ...password, error: "" })
    }
    if (send)
      dispatch(LoginAction({ email: email.value, password: password.value }))
  }

  useEffect(() => {
    setError("")
    if (loginState.status) {
      window.location = "/"
      close()
    }
    if (loginState.error)
      setError("login or password incorect")
    else {
      setError("")
    }
  }, [loginState])
  return <Auth type="reg" changeModal={changeModal} open={open} close={close} >
    <div>
      <div className='mailverefication'>
        <p id="LoginTitle" className="Jost600">Войти в личный кабинет</p>
        <div className="AuthInput">
          <UIInput type={"email"} errorText={email.error} error={email.error} onChange={(e) => setEmail({ ...email, value: e })} value={email.value} placeholder={"Электронная почта"} />
          <UIInput type={"password"} errorText={password.error} error={password.error} onChange={(e) => setPassword({ ...password, value: e })} value={password.value} placeholder={"Пароль"} />
          <div className='forgotPasswordDiv'>
            <CheckBox IsChecked={(e) => setAllow(e)} text={"Я принимаю условия и политику конфиденциальности"} />
            <div className='forgotPassword'>
              <div></div>
              <p className="Jost400" style={{ color: "#576569" }}>Забыли пароль?</p>
            </div>
          </div>
        </div>
      </div>
      <UIButton disable={!allow} loading={loginState.loading} onClick={() => SendData()} full title={"Зарегистрироваться"} />
      <p className='errorText'>
        {error}
      </p>
      <p className="Jost400" id="RegistrP">Уже зарегистрирован? <span onClick={(e) => {
        e.stopPropagation()
        e.preventDefault()
        changeModal("reg")
      }}>Зарегистрироваться</span></p>
    </div>
  </Auth>
}

export default Login