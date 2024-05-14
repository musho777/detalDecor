import Popup from "../popup/index"
import './styles.css'
import Image from 'next/image'
import RegistImg from '../../assets/image/Rectangle.png'

const Auth = ({ children, open, close, }) => {
  return <Popup open={open} close={close}>
    <div className="LoginWrapper">
      <div className="ImageWrapper">
        <Image
          src={RegistImg}
          alt="registr"
          placeholder="blur"
          className="LoginImage"
          layout="responsive"
        />
      </div>
      <div className="InfoWrapper">
        {children}
      </div>
    </div>
  </Popup>
}

export default Auth