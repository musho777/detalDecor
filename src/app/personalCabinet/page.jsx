"use client"

import { CameraSvg } from "@/assets/Svg"
import { Input } from './components/input'
import Selects from './components/select'
import UIButton from "@/UI/button"
import { useDispatch, useSelector } from "react-redux"
import { GetCountry, UpdateUserInfo } from '../../services/action/action'
import { useEffect, useState } from "react"
import Image from "next/image"

const PersonalCabinet = () => {
  const [companiName, setCompaniName] = useState("")
  const [phone, setPhone] = useState("")
  const user = useSelector((st) => st.user)

  const updateData = useSelector((st) => st.updateData)

  const dispatch = useDispatch()

  useEffect(() => {
    if (!companiName) {
      setCompaniName(user.data.company_name)
      setPhone(user.data.phone)
    }
  }, [user])


  const UpdateUser = () => {
    const formData = new FormData();
    formData.append('company_name', companiName);
    formData.append('phone', phone);
    dispatch(UpdateUserInfo(formData))
  }

  return <div className="PersonalCabinetDiv">
    <p id="PersonalCabinetTitle" className="Jost500_18" style={{ color: '#FFB800' }} >Личные данные</p>
    <div className="PersonalCabinet">
      <div className="avatarDiv">
        <Image
          width={120}
          height={120}
          src={`https://detaldecor.digiluys.com/${user.data.logo}`} />
        <div className="CameraSvg">
          <CameraSvg />
        </div>
      </div>
      <div className="PersonalCabinetInputWrappr">
        <div>
          <Input onChange={(e) => setCompaniName(e)} value={companiName} label={"company name"} />
          {/* <Selects data={countryn.data} label={"country"} /> */}
        </div>
        <div>
          <Input onChange={(e) => setPhone(e)} value={phone} label={"Phone number"} />
        </div>
      </div>
      <div className='personalCabinetButton'>
        <UIButton loading={updateData.loading} title={"Сменить пароль"} onClick={() => UpdateUser()} />
      </div>
    </div>
  </div>
}
export default PersonalCabinet