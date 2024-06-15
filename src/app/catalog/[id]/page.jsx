"use client"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { GetCurrency, GetProduct, GetTopProduct } from '../../../services/action/action'
import { Select } from '../../../components/select'
import '../styles.css'
import CardWrapper from '../../../components/CardWrapper'
import { useRouter } from 'next/navigation'

const Catalog = (context) => {
  const [startValue, setStartValue] = useState("")
  const [endValue, setEndValue] = useState("")
  const [selectedCurency, setSelectedCurency] = useState("AMD")
  const router = useRouter();
  const products = useSelector((st) => st.products)
  const curency = useSelector((st) => st.curency)
  const dispatch = useDispatch()
  useEffect(() => {
    if (context.searchParams.end) {
      setEndValue(context.searchParams.end)
    }
    if (context.searchParams.start) {
      setStartValue(context.searchParams.start)
    }
    if (context.searchParams.curency) {
      setSelectedCurency(context.searchParams.curency)
    }
    dispatch(GetProduct({
      url: context.params?.id,
      currency: selectedCurency,
      start: context.searchParams.start,
      end: context.searchParams.end
    }))
  }, [context])

  useEffect(() => {
    dispatch(GetCurrency())
  }, [])


  const handleUpdateURL = () => {
    console.log('111')
    console.log(selectedCurency, 'selectedCurency')
    let uri = `/catalog/kuxni?`
    if (startValue) {
      uri += `&start=${startValue}`
    }
    if (endValue) {
      uri += `&end=${endValue}`
    }
    if (curency) {
      uri += `&curency=${selectedCurency}`
    }
    router.push(uri);
  };


  return <div>
    <p id="catalogtitle" style={{ color: "#FFB800" }} className="jeJost600_24">Добавить товар в каталог</p>
    <div className='SelectWrapper'>
      <Select />
      <Select onSelect={(e) => setSelectedCurency(e.name)} defaultSelect={curency.data[0]} data={curency.data} />
      <input value={startValue} onChange={(e) => setStartValue(e.target.value)} placeholder='start' className='CatalogInput' />
      <input value={endValue} onChange={(e) => setEndValue(e.target.value)} placeholder='end' className='CatalogInput' />
      <button onClick={() => handleUpdateURL()} className='Jost500' id='CatalogButton'>filtr</button>
    </div>
    <CardWrapper loading={products.loading} data={products.data?.data} />
  </div>
}

export default Catalog