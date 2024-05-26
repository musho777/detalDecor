"use client"
import UIButton from '@/UI/button'
import { Input } from '../components/input'
import { useEffect, useState } from 'react'
import { ChangePassword, StatusAction } from '@/services/action/action'
import { useDispatch, useSelector } from 'react-redux'

const Safety = () => {

  const [oldPassowrd, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmNewPassword, setConfirmNewPassword] = useState("")
  const chagenPassword = useSelector((st) => st.chagenPassword)
  const dispatch = useDispatch()

  const Send = () => {
    let send = true
    if (oldPassowrd.length < 8) {
      send = false
      dispatch(StatusAction("errorStatus", "oldPassowrd <8"))
    }
    else if (newPassword.length < 8) {
      send = false
      dispatch(StatusAction("errorStatus", "newPassword <8"))
    }
    else if (confirmNewPassword.length < 8) {
      send = false
      dispatch(StatusAction("errorStatus", "ConfirmNewPassword <8"))
    }
    else if (confirmNewPassword != newPassword) {
      send = false
      dispatch(StatusAction("errorStatus", "parols is not same "))
    }
    if (send) {
      dispatch(ChangePassword({
        old_password: oldPassowrd,
        password: newPassword,
        password_confirmation: confirmNewPassword,
      }))
    }
  }
  useEffect(() => {
    if (chagenPassword.status) {
      setConfirmNewPassword('')
      setNewPassword('')
      setOldPassword('')
    }
  }, [chagenPassword])
  return <div className="PersonalCabinetDiv">
    <p className="Jost500_18" style={{ color: '#FFB800' }} >Безопасность</p>
    <p id="PersonalCabinetTitle" className="Jost400_16" >Сменить пароль</p>
    <div className='Safety'>
      <Input type={'password'} value={oldPassowrd} onChange={(e) => setOldPassword(e)} label={"Введите старый пароль"} />
      <Input type={'password'} value={newPassword} onChange={(e) => setNewPassword(e)} label={"Введите новый пароль"} />
      <Input type={'password'} value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e)} label={"Повторите пароль"} />
      <div className='SafetyButton'>
        <UIButton loading={chagenPassword.loading} title={"Сменить пароль"} onClick={() => Send()} />
      </div>
    </div>
  </div>
}

export default Safety