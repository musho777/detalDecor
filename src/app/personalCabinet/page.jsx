"use client"

import { CameraSvg } from "@/assets/Svg"
import { Input } from './components/input'
import Selects from './components/select'
import UIButton from "@/UI/button"
const PersonalCabinet = () => {
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
          <Input />
          <Input />
          <Selects />
          <Input />
        </div>
        <div>
          <Input />
          <Input />
          <Input />
        </div>
      </div>
      <div className='personalCabinetButton'>
        <UIButton title={"Сменить пароль"} onClick={console.log("---")} />
      </div>
    </div>
  </div>
}
export default PersonalCabinet