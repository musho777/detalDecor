"use client"
import '../styles.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { GetCategory, GetCurrency, GetProduct } from '../../../services/action/action'
import { Select } from '../../../components/select'
import CardWrapper from '../../../components/CardWrapper'
import { useRouter } from 'next/navigation'

const Catalog = (context) => {
  const [startValue, setStartValue] = useState("")
  const [endValue, setEndValue] = useState("")
  const [selectedCurency, setSelectedCurency] = useState("AMD")
  const [sub, setSub] = useState()
  const router = useRouter();
  const products = useSelector((st) => st.products)
  const curency = useSelector((st) => st.curency)
  const category = useSelector((st) => st.category)
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
    if (context.searchParams.category) {
      setSub(context.searchParams.category)
    }
    dispatch(GetProduct({
      url: context.params?.id,
      currency: context.searchParams.curency,
      start: context.searchParams.start,
      end: context.searchParams.end,
      category: context.searchParams.category
    }))
  }, [context])

  useEffect(() => {
    dispatch(GetCurrency())
  }, [])

  useEffect(() => {
    dispatch(GetCategory(context.params?.id))
  }, [context.params])


  const handleUpdateURL = () => {
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
    if (sub) {
      uri += `&category=${sub}`
    }
    router.push(uri);
  };
  return <div>
    <p id="catalogtitle" className="Jost600_24">Добавить товар в каталог</p>
    <div className='SelectWrapper'>
      <Select
        loading={category.loading}
        onSelect={(e) => setSub(e.url)}
        width={200}
        defaultSelect={category.data.find((elm) => elm.url == sub)}
        data={category.data}
        defaultValue="Sub category"
      />
      <Select
        onSelect={(e) => setSelectedCurency(e.name)}
        defaultSelect={curency.data.find((elm) => elm.name == selectedCurency)}
        data={curency.data}
        width={70}
        loading={curency.loading}
      />
      <input
        value={startValue}
        onChange={(e) => setStartValue(e.target.value)}
        placeholder='start'
        className='CatalogInput'
      />
      <input
        value={endValue}
        onChange={(e) => setEndValue(e.target.value)}
        placeholder='end'
        className='CatalogInput'
      />
      <button
        disabled={products.loading}
        onClick={() => handleUpdateURL()}
        className='Jost500'
        id='CatalogButton'>
        filtr
      </button>
    </div>
    {(!products.loading && products.data?.data?.length == 0) ?
      <p className='Jost500' id='nothingNotFound'>
        vochinch chka
      </p> :
      <CardWrapper
        loading={products.loading}
        data={products.data?.data}
      />
    }
  </div>
}

export default Catalog