import { ChackSvg, CheckedSvg, DiableCheckedSvg } from '@/assets/Svg'
import './styles.css'
import { useEffect, useState } from 'react'
const CheckBox = ({ checked, text, disable, IsChecked }) => {
  const [isChecked, setIsChecked] = useState()
  useEffect(() => {
    setIsChecked(!checked)
  }, [checked])

  return <div className='CheckBox'>
    {!disable ?
      <div onClick={() => {
        IsChecked(isChecked)
        setIsChecked(!isChecked)
      }}>
        {isChecked ?
          <ChackSvg /> :
          <CheckedSvg />
        }
      </div> :
      <DiableCheckedSvg />
    }
    <p style={disable && { color: '#576569' }} className='Jost400'>{text}</p>
  </div>
}

export default CheckBox