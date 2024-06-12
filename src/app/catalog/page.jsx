"use client"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { GetTopProduct } from '../../services/action/action'
import CardWrapper from '../../components/CardWrapper'
import { Select } from '../../components/select'
import './styles.css'

const Catalog = () => {
  const topProduct = useSelector((st) => st.topProduct)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetTopProduct())
  }, [])

  return <div>
    <p id="catalogtitle" style={{ color: "#FFB800" }} className="jeJost600_24">Добавить товар в каталог</p>
    <div className='SelectWrapper'>
      <Select />
      <Select />
      <Select />
      <Select />
      <Select />
      <Select />
      <Select />
      <Select />
      <Select />
      <Select />
      <Select />
      <Select />
      <Select />
    </div>
    <CardWrapper loading={topProduct.loading} data={topProduct.data} />
  </div>
}

export default Catalog