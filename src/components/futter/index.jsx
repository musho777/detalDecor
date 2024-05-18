import './styles.css'

import Image from "next/image"
import logo from '../../assets/image/logo2.png'
import { TelegramSvg } from '@/assets/Svg'
const Futter = () => {
  return <div className="futter">
    <div >
      <div className='futterLogoWrapper'>
        <Image
          src={logo}
          alt="logo"
          width={65}
          height={68}
        />
        <div>
          <p className='Jost400_16'>Каталог</p>
          <p className='Jost400_16'>Контакты</p>
          <p className='Jost400_16'>Политика конфиденциальности</p>
          <p className='Jost400_16'>Условия использования</p>
        </div>
      </div>
      <div className='SocialMediaSvg'>
        <p className='Jost400_20'>Вход / Регистрация</p>
        <div className='FutterSvgWrapper'>
          <TelegramSvg />
          <TelegramSvg />
          <TelegramSvg />
        </div>
        <p className='Jost400_16'>Ⓒ Detal Decor 2024</p>
      </div>
    </div>
  </div>
}

export default Futter