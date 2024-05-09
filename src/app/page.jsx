"use client"
import Header from '../components/header/index'
import CateogryList from '../components/CateogryList'
import Carusel from '../components/Carusel'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { GetCategory, GetTopProduct } from '../services/action/action'
import CardWrapper from '../components/CardWrapper'
// import 
const Main = () => {
  const category = useSelector((st) => st.category)
  const topProduct = useSelector((st) => st.topProduct)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetCategory())
    dispatch(GetTopProduct())
  }, [])
  return <div>
    <Header />
    <div className='CateogrySlider'>
      <CateogryList data={category.data} loading={category.loading} />
      <Carusel />
      <CardWrapper loading={topProduct.loading} data={topProduct.data} />
    </div>
  </div>
}

export default Main