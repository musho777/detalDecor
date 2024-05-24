"use client"
import CateogryList from '../components/CateogryList'
import Carusel from '../components/Carusel'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { GetBanner, GetCategory, GetTopProduct } from '../services/action/action'
import CardWrapper from '../components/CardWrapper'
import { Bestmanufacturers } from '@/components/bestmanufacturers'

const Main = () => {
  const category = useSelector((st) => st.category)
  const topProduct = useSelector((st) => st.topProduct)
  const banner = useSelector((st) => st.banner)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetCategory())
    dispatch(GetTopProduct())
    dispatch(GetBanner())
  }, [])

  return <div>
    <CateogryList data={category.data} loading={category.loading} />
    <Carusel loading={banner.loading} data={banner.data} />
    <Bestmanufacturers />
    <div className='CardWrapperDiv'>
      <p className='Jost400_32'>Популярные товары</p>
      <CardWrapper loading={topProduct.loading} data={topProduct.data} />
    </div>
  </div>
}

export default Main