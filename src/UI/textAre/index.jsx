import './styles.css'
import { CloseEye, OpenEye } from '../../assets/Svg/index'
import { useState } from 'react'
import './styles.css'

const TeaxAre = ({ placeholder, type, onChange, error, errorText, value, label }) => {
  const [types, setTipes] = useState(type)

  return <div className='TeaxtAreaWrapper'>
    {label && <p id="label" className='Jost400'>{label}</p>}
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      type={types}
      className='input'
      id={error ? "errorInput" : ""}
    />
    <p className='InputerrorText'>{errorText}</p>
    {types == "password" &&
      < div onClick={() => setTipes("noPass")} className='eyeIcone'>
        <CloseEye />
      </div>
    }
    {types == "noPass" &&
      < div onClick={() => setTipes("password")} className='eyeIcone'>
        <OpenEye />
      </div>

    }

  </div >
}

export default TeaxAre 