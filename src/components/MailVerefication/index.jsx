"use client"
import { useDispatch, useSelector } from 'react-redux'
import Auth from '../Auth/index'
import { useEffect, useState } from 'react'
import { ClearConfirmCode, ConfirmMail, Register } from '@/services/action/action'
import Swicher from '../swicher'
import UIButton from '@/UI/button'
import UIInput from '@/UI/input'

import './styles.css'


const MailVereficastion = ({ open, close, changeModal, email }) => {
  const dispatch = useDispatch()

  const [value, setValue] = useState("")
  const [error, setError] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  const confrimCode = useSelector((st) => st.confrimCode)
  console.log(confrimCode)
  const SendData = () => {
    if (!value.length) {
      setError(true)
    }
    else {
      setError(false)
      setErrorMsg("")
      dispatch(ConfirmMail({
        email: email,
        code: value
      }))
    }
  }

  useEffect(() => {
    if (confrimCode.error) {
      setErrorMsg(confrimCode.error)
    }
  }, [confrimCode])

  return <Auth type="reg" changeModal={changeModal} open={open} close={close} >
    <div>
      <div className='mailverefication'>
        <p id="LoginTitle" className="Jost600">Подтвердите адрес электронной почты</p>
        <p className='Jost400'>Введите код, который мы отправили вам, чтобы завершить проверку электронной почты.</p>
        <div className="AuthInput">
          <UIInput errorText={errorMsg} error={error} onChange={(e) => setValue(e)} value={value} placeholder={"Введите код"} />
          <div>
            <p className='Jost400' id='mailvereficationSpan'>
              <span >Не пришел код?</span>Отправить код еще раз</p>
          </div>
        </div>
      </div>
      <UIButton loading={confrimCode.loading} onClick={() => SendData()} full title={"Зарегистрироваться"} />
      <p className="Jost400" id="RegistrP">Уже зарегистрирован? <span onClick={(e) => {
        e.stopPropagation()
        e.preventDefault()
        changeModal()
      }}>Войти</span></p>
    </div>
  </Auth>
}

export default MailVereficastion