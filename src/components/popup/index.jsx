import './styles.css'
const Popup = ({ children }) => {
  return (
    <div className="PopupContainer">
      <div className="Popup">
        {children}
      </div>
    </div>
  );
}
export default Popup;
