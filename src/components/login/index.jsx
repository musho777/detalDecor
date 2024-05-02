"use client"
import Popup from "../popup/index"
import './styles.css'
import Image from 'next/image'
import RegistImg from '../../assets/image/Rectangle.png'
import UIInput from "../../UI/input/index";

const Login = () => {
  return <Popup>
    <div className="LoginWrapper">
      <div className="ImageWrapper">
        <Image
          src={RegistImg}
          alt="registr"
          placeholder="blur"
          layout="responsive"
        />
      </div>
      <div className="InfoWrapper">
        <p className="Jost600">Войти в личный кабинет</p>
        <UIInput type="password" placeholder="Электронная почта" />
      </div>
    </div>
  </Popup>
}

export default Login