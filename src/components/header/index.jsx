"use client"
import Image from 'next/image'
import Login from "../Login/index.jsx"
import Registr from '../Registr/index.jsx'
import MailVereficastion from '../MailVerefication'

import './style.css'
import logo from '../../assets/image/logo.png'
import { BasketSvg, FilterSvg, HeartSvg, MenuMobileSvg, MenuSvg } from '@/assets/Svg'
import Search from './search'
import { useState } from 'react'

const Header = () => {
  const [ShowLogin, setShowLogin] = useState(false)
  const [modal, setModal] = useState("login")
  const [email, setEmail] = useState("")

  return <div className='header'>
    {modal == "login" && ShowLogin &&
      < Login changeModal={() => setModal("reg")} open={ShowLogin} close={() => setShowLogin(false)} />
    }
    {modal == "reg" && ShowLogin &&
      <Registr setEmail={(e) => setEmail(e)} changeModal={(e) => setModal(e)} open={ShowLogin} close={() => setShowLogin(false)} />
    }
    {modal == "mailverefication" && ShowLogin &&
      <MailVereficastion email={email} changeModal={(e) => setModal(e)} open={ShowLogin} close={() => setShowLogin(false)} />
    }
    <div className='IconeSvg'>
      <Image
        src={logo}
        alt="logo"
        width={46}
        height={43}
      />
      <div className='Catalog'>
        <p className='Jost500'>Каталог</p>
        <MenuSvg />
      </div>
    </div>
    <div className='SearchinputContiner'>
      <Search />
      <div className='SearchInputSvg'>
        <FilterSvg />
        <BasketSvg />
        <HeartSvg />
      </div>
    </div>
    <div>
      <p onClick={() => {
        setModal("login")
        setShowLogin(true)
      }} id="headerLogin" className='Jost500'>Вход / Регистрация</p>
      <div className='MenuMobileHeader'><MenuMobileSvg /></div>
    </div>
  </div>
}
export default Header