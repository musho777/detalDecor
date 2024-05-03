import './styles.css'
const UIButton = ({ title, full }) => {
  return <button style={full && { width: "100%" }} className='Button'>{title}</button>
}
export default UIButton