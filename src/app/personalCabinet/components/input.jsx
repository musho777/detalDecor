import { EyePassword } from '@/assets/Svg'
import './styles.css'
export const Input = ({ label, value, onChange, type }) => {

  return <div className="Input">
    <label style={{ color: "#C0C0C0" }} className='Jost400'>{label}</label>
    <div className='InputWrapper'>
      <input type={'password'} onChange={(e) => onChange(e.target.value)} value={value ? value : ""} />
      {type === 'password' && <div className='EyePassword'>
        <EyePassword />
      </div>}
    </div>
  </div>
}