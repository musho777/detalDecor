import { useEffect } from 'react';
import './styles.css'
const Popup = ({ children, close, open }) => {
  return (
    <div onClick={() => close()} className="PopupContainer">
      <div id={open ? "activePopUp" : ""} onClick={((e) => {
        e.stopPropagation()
        e.preventDefault()
      })} className="Popup">
        {children}
      </div>
    </div>
  );
}
export default Popup;
