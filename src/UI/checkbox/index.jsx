import { ChackSvg, CheckedSvg, DiableCheckedSvg } from '@/assets/Svg'
import './styles.css'
import { useState } from 'react'
const CheckBox = ({ checked, text, disable }) => {
  const [isChecked, setIsChecked] = useState(checked)

  return <div className='CheckBox'>
    {!disable ? <div onClick={() => setIsChecked(!isChecked)}>
      {isChecked ?
        <ChackSvg /> :
        <CheckedSvg />
      }
    </div> :
      <DiableCheckedSvg />
    }
    <p className='Jost400'>{text}</p>
  </div>
}

export default CheckBox