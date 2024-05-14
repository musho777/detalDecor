import './styles.css'
const UIButton = ({ title, full, onClick }) => {
  return <button onClick={() => onClick()} style={full && { width: "100%" }} className='Button'>{title}</button>
}
export default UIButton