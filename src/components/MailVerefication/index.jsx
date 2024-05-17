"use client"
import { useDispatch, useSelector } from 'react-redux'
import Auth from '../Auth/index'
import { useEffect, useState } from 'react'
import { ConfirmMail, ReSendConfirmCode } from '@/services/action/action'
import UIButton from '@/UI/button'
import UIInput from '@/UI/input'
import './styles.css'


const MailVereficastion = ({ open, close, changeModal, email }) => {
  const dispatch = useDispatch()

  const [value, setValue] = useState("")
  const [error, setError] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  const confrimCode = useSelector((st) => st.confrimCode)
  const [sendCode, setSendCode] = useState(false)
  const [time, setTime] = useState(0);
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
    if (confrimCode.status) {
      close()
    }
  }, [confrimCode])

  useEffect(() => {

    if (time === 0) {
      setSendCode(false)
    };

    const intervalId = setInterval(() => {
      setTime(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [time]);

  const ReSend = () => {
    setTime(60)
    setSendCode(true)
    dispatch(ReSendConfirmCode({ email: email }))
  }

  return <Auth type="reg" changeModal={changeModal} open={open} close={close} >
    <div>
      <div className='mailverefication'>
        <p id="LoginTitle" className="Jost600">Подтвердите адрес электронной почты</p>
        <p className='Jost400'>Введите код, который мы отправили вам, чтобы завершить проверку электронной почты.</p>
        <div className="AuthInput">
          <UIInput errorText={errorMsg} error={error} onChange={(e) => setValue(e)} value={value} placeholder={"Введите код"} />
          {!sendCode ? <div onClick={() => ReSend()} className='resSendCode'>
            <p className='Jost400' id='mailvereficationSpan'>
              <span >Не пришел код?</span>Отправить код еще раз</p>
          </div> : <div className='resSendCode'>
            <p className='Jost400' id='mailvereficationSpan'>
              <span >povtarite cherez?</span>{time}s</p>
          </div>
          }
        </div>
      </div>
      <UIButton loading={confrimCode.loading} onClick={() => SendData()} full title={"Зарегистрироваться"} />
      <p className="Jost400" id="RegistrP">Уже зарегистрирован? <span onClick={(e) => {
        e.stopPropagation()
        e.preventDefault()
        changeModal("reg")
      }}>Войти</span></p>
    </div>
  </Auth>
}

export default MailVereficastion