"use client"
import Header from '../components/header/index'
import CateogryList from '../components/CateogryList'
import Carusel from '../components/Carusel'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { GetBanner, GetCategory, GetTopProduct } from '../services/action/action'
import CardWrapper from '../components/CardWrapper'

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
    <Header />
    <CateogryList data={category.data} loading={category.loading} />
    <Carusel loading={banner.loading} data={banner.data} />
    <CardWrapper loading={topProduct.loading} data={topProduct.data} />
  </div>
}

export default Main