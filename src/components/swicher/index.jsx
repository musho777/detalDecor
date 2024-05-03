import { useState } from "react"
import "./styles.css"
const Swicher = ({ mb, mt }) => {
  const [active, setActive] = useState(0)
  return <div style={{ marginBottom: mb, marginTop: mt }} className="Swicher">
    <div className="SwicherDiv">
      <p onClick={() => setActive(0)} className={!active && "activeSwicherDiv"}>Я покупатель</p>
      <p onClick={() => setActive(1)} className={active && "activeSwicherDiv"}>Я продавец</p>
    </div>
  </div>
}

export default Swicher