import './styles.css'
export const Input = ({ label, value, onChange }) => {
  return <div className="Input">
    <label>{label}</label>
    <input onChange={(e) => onChange(e.target.value)} value={value ? value : ""} />
  </div>
}