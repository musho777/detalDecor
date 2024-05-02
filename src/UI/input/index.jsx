import './styles.css'
import { CloseEye } from '../../assets/Svg/index'
import { useEffect, useState } from 'react'
const UIInput = ({ placeholder, type }) => {
  const [padding, setPadding] = useState("15px")
  useEffect(() => {
    if (type == "password") {
      setPadding("40px")
    }
  }, [type])
  return <div className='InputWrapper'>
    <input style={{ paddingRight: padding }} placeholder={placeholder} type={type} className='input' />
    {type == "password" && < div className='eyeIcone'>
      <CloseEye />
    </div>
    }
  </div >
}

export default UIInput 