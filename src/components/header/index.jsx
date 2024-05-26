"use client"
import Image from 'next/image'
import Login from "../Login/index.jsx"
import Registr from '../Registr/index.jsx'
import MailVereficastion from '../MailVerefication'

import './style.css'
import logo from '../../assets/image/logo.png'
import { BasketSvg, DownSvgWhite, FilterSvg, HeartSvg, MenuMobileSvg, MenuSvg } from '@/assets/Svg'
import Search from './search'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CloseStatus, GetUserIfno } from '@/services/action/action.js'
import Alert from '@mui/material/Alert';


const Header = () => {
  const [ShowLogin, setShowLogin] = useState(false)
  const [modal, setModal] = useState("login")
  const [email, setEmail] = useState("")
  const user = useSelector((st) => st.user)
  const dispatch = useDispatch()
  const status = useSelector((st) => st.status)
  useEffect(() => {
    dispatch(GetUserIfno())
  }, [])

  useEffect(() => {
    if (status.show) {
      setTimeout(() => {
        dispatch(CloseStatus())
      }, 4000)
    }
  }, [status])



  return <div className='header'>
    <div className='AlertDiv'>
      {status.show && <Alert variant="filled" severity={status.type}>
        {status.msg}
      </Alert>}
    </div>
    {modal == "login" && ShowLogin &&
      < Login changeModal={() => setModal("reg")} open={ShowLogin} close={() => setShowLogin(false)} />
    }
    {modal == "reg" && ShowLogin &&
      <Registr setEmail={(e) => setEmail(e)} changeModal={(e) => setModal(e)} open={ShowLogin} close={() => setShowLogin(false)} />
    }
    {modal == "mailverefication" && ShowLogin &&
      <MailVereficastion email={email} changeModal={(e) => setModal(e)} open={ShowLogin} close={() => setShowLogin(false)} />
    }
    <div onClick={() => window.location = "/"} className='IconeSvg'>
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
    {user.data?.length == 0 ? <div>
      <p onClick={() => {
        setModal("login")
        setShowLogin(true)
      }} id="headerLogin" className='Jost500'>Вход / Регистрация</p>
      <div className='MenuMobileHeader'><MenuMobileSvg /></div>
    </div> :
      <div className='UserDiv'>
        <Image
          width={30}
          height={30}
          src={`https://detaldecor.digiluys.com/${user.data?.logo}`} />
        <DownSvgWhite />
      </div>
    }
  </div>
}
export default Header