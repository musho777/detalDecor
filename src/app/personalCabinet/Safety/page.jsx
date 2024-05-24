"use client"
import UIButton from '@/UI/button'
import { Input } from '../components/input'

const Safety = () => {
  return <div className="PersonalCabinetDiv">
    <p id="PersonalCabinetTitle" className="Jost500_18" style={{ color: '#FFB800' }} >Безопасность</p>
    <div className='Safety'>
      <Input />
      <Input />
      <Input />
      <div className='SafetyButton'>
        <UIButton title={"Сменить пароль"} onClick={console.log("---")} />
      </div>
    </div>
  </div>
}

export default Safety