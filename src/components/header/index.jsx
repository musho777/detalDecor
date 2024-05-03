"use client"
import Image from 'next/image'
import './style.css'
import logo from '../../assets/image/logo.png'
import { BasketSvg, FilterSvg, HeartSvg, MenuMobileSvg, MenuSvg } from '@/assets/Svg'
import Search from './search'
import { useState } from 'react'
import Login from "../Login"
const Header = () => {
  const [ShowLogin, setShowLogin] = useState(false)
  return <div className='header'>
    {ShowLogin && <Login open={ShowLogin} close={() => setShowLogin(false)} />}
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