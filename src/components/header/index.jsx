"use client"
import Image from 'next/image'
import Login from "../Login"
import Registr from '../Registr/index.jsx'
import MailVereficastion from '../MailVerefication'

import './style.css'
import logo from '../../assets/image/logo.png'
import { BasketSvg, DownSvgWhite, FilterSvg, HeartSvg, MenuMobileSvg, MenuSvg } from '@/assets/Svg'
import Search from './search'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CloseStatus, GetUserIfno, Logout } from '@/services/action/action.js'
import Alert from '@mui/material/Alert';
import { Skeleton } from '@mui/material'
import { useRouter } from 'next/navigation'


const Header = () => {
  const [ShowLogin, setShowLogin] = useState(false)
  const [modal, setModal] = useState("login")
  const [email, setEmail] = useState("")
  const user = useSelector((st) => st.user)
  const dispatch = useDispatch()
  const status = useSelector((st) => st.status)
  const [open, setOpen] = useState(false)
  const ref = useRef()
  const router = useRouter();

  const [scrollTop, setScrolled] = useState(false)


  useEffect(() => {
    if (status.show) {
      setTimeout(() => {
        dispatch(CloseStatus())
      }, 4000)
    }
  }, [status])



  useEffect(() => {
    dispatch(GetUserIfno())

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 90) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);


  return <div id={scrollTop ? 'header' : ""} className='header'>
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
    {
      user.loading && <div className='UserDiv'>
        <Skeleton
          sx={{ bgcolor: '#3a3c3d' }}
          variant="circular" width={30} height={30} />
        <DownSvgWhite />
      </div>
    }
    {
      !user.loading && user.data?.length == 0 && <div>
        <p onClick={() => {
          setModal("login")
          setShowLogin(true)
        }} id="headerLogin" className='Jost500'>Вход / Регистрация</p>
        <div className='MenuMobileHeader'><MenuMobileSvg /></div>
      </div>
    }
    {
      user.data?.length != 0 && <div onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        setOpen(!open)
      }} className='UserDiv'>
        <Image
          width={30}
          height={30}
          src={`https://detaldecor.digiluys.com/${user.data?.logo}`} />
        <div id={open ? 'rotate-90' : ""} className={'rotate'} >
          <DownSvgWhite />
        </div>
        {open && <div ref={ref} className='UserDivMenu'>
          <p onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            router.push('/personalCabinet')
            setOpen(false)
          }}>Мои профиль</p>
          <p
            onClick={(e) => {
              dispatch(Logout())
              window.location = "/"
            }}
          >Выход</p>
        </div>}
      </div>
    }
  </div >
}
export default Header