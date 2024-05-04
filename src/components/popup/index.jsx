import { useEffect } from 'react';
import './styles.css'
const Popup = ({ children, close, open }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    }
    else {
      document.body.style.overflow = 'scroll';
    }
  }, [open])
  if (open) {
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
}
export default Popup;
