import Popup from "../popup/index"
import './styles.css'
import Image from 'next/image'
import Swicher from '../swicher'
import RegistImg from '../../assets/image/Rectangle.png'
import UIInput from '../../UI/input'
import CheckBox from '../../UI/checkbox'
import UIButton from '../../UI/button'

const Auth = ({ open, close, description, title, input, remember, accept = true }) => {
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
        <div>
          <p id="LoginTitle" className="Jost600">{title}</p>
          {description && <p id="AuthDescription" className="Jost400"> {description}</p>}
          <Swicher mb={20} mt={10} />
          <div className="AuthInput">
            {input.map((elm, i) => {
              return <UIInput type={elm.type} placeholder={elm.placeholder} />
            })}
          </div>
          {accept && <div className="CheckBoxInfo">
            <CheckBox text="Я принимаю условия и политику конфиденциальности" />
            {remember && <div className="forogtPassword">
              <CheckBox text="Запомнить меня" />
              <p className='Jost400'>Забыли пароль?</p>
            </div>}
          </div>}
          <UIButton full title={"Войти"} />
          <p className="Jost400" id="RegistrP">Не зарегистрирован? <span>Зарегистрироваться</span></p>
        </div>
      </div>
    </div>
  </Popup>
}

export default Auth