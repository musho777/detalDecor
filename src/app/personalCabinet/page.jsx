"use client"

import { CameraSvg } from "@/assets/Svg"
import { Input } from './components/input'
import Selects from './components/select'
import UIButton from "@/UI/button"
import { useDispatch, useSelector } from "react-redux"
import { UpdateUserInfo } from '../../services/action/action'
import { useEffect, useState } from "react"

const PersonalCabinet = () => {
  const [companiName, setCompaniName] = useState("")

  const user = useSelector((st) => st.user)

  const updateData = useSelector((st) => st.updateData)

  useEffect(() => {
    if (!companiName)
      setCompaniName(user.data.company_name)
  }, [user])



  const dispatch = useDispatch()


  const UpdateUser = () => {
    console.log(companiName, '2')
    const formData = new FormData();
    formData.append('company_name', companiName);
    dispatch(UpdateUserInfo(formData))
  }

  return <div className="PersonalCabinetDiv">
    <p id="PersonalCabinetTitle" className="Jost500_18" style={{ color: '#FFB800' }} >Личные данные</p>
    <div className="PersonalCabinet">
      <div className="avatarDiv">
        <img src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg" />
        <div className="CameraSvg">
          <CameraSvg />
        </div>
      </div>
      <div className="PersonalCabinetInputWrappr">
        <div>
          <Input onChange={(e) => setCompaniName(e)} value={companiName} label={"company name"} />
          <Selects label={"country"} />
        </div>
        <div>
          <Input value={user.data.phone} label={"Phone number"} />
          <Selects label={"City"} />
        </div>
      </div>
      <div className='personalCabinetButton'>
        <UIButton loading={updateData.loading} title={"Сменить пароль"} onClick={() => UpdateUser()} />
      </div>
    </div>
  </div>
}
export default PersonalCabinet