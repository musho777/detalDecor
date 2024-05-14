"use client"
import Image from 'next/image'
import Login from "../Login/index.jsx"
import Registr from '../Registr/index.jsx'
import './style.css'
import logo from '../../assets/image/logo.png'
import { BasketSvg, FilterSvg, HeartSvg, MenuMobileSvg, MenuSvg } from '@/assets/Svg'
import Search from './search'
import { useEffect, useState } from 'react'

const Header = () => {
  const [ShowLogin, setShowLogin] = useState(false)
  const [modal, setModal] = useState("reg")

  return <div className='header'>
    {modal == "login" &&
      <Login changeModal={() => setModal("reg")} open={ShowLogin} close={() => setShowLogin(false)} />
    }
    {modal == "reg" &&
      <Registr changeModal={() => setModal("login")} open={ShowLogin} close={() => setShowLogin(false)} />
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
      <p onClick={() => setShowLogin(true)} id="headerLogin" className='Jost500'>Вход / Регистрация</p>
      <div className='MenuMobileHeader'><MenuMobileSvg /></div>
    </div>
  </div>
}
export default Header