import './styles.css'
import MoonLoader from "react-spinners/ClipLoader";
const UIButton = ({ title, full, onClick, loading }) => {
  return <button disabled={loading} onClick={() => onClick()} style={full && { width: "100%" }} className='Button'>
    {!loading ? title :
      <MoonLoader
        color={"white"}
        loading={true}
        size={15}
      />
    }
  </button>
}
export default UIButton