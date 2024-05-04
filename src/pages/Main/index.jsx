"use client"
import Header from '../../components/header/index'
import CateogryList from '../../components/CateogryList'
import Carusel from '../../components/Carusel'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { GetCategory } from '../../services/action/action'
const Main = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetCategory())
  }, [])
  return <div>
    <Header />
    <div className='CateogrySlider'>
      <CateogryList />
      <Carusel />
    </div>
  </div>
}

export default Main