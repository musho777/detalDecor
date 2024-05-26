import './styles.css'
import { CloseEye, OpenEye } from '../../assets/Svg/index'
import { useEffect, useState } from 'react'
const UIInput = ({ placeholder, type, onChange, error, errorText, value, label }) => {
  const [padding, setPadding] = useState("15px")
  const [val, setVal] = useState(value)
  const [types, setTipes] = useState(type)
  useEffect(() => {
    if (type == "password") {
      setPadding("40px")
    }
    setTipes(type)
  }, [type])

  useEffect(() => {
    if (!value) {
      setVal("")
    }
    else {
      setVal(value)
    }
  }, [value])



  return <div className='InputWrapper'>
    {label && <p id="label" className='Jost400'>{label}</p>}
    <input
      value={val}
      onChange={(e) => onChange(e.target.value)}
      style={{ paddingRight: padding }}
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

export default UIInput 