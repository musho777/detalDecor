"use client"
import './styles.css'
import { Chart } from '../../../UI/chart'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { GetcharterData } from '../../../services/action/action'
import Select from '../components/select'
import MoonLoader from "react-spinners/ClipLoader";

const Statistics = () => {
  const dispatch = useDispatch()
  const [periud, setPeriud] = useState(7)
  const getChart = useSelector((st) => st.getChart)
  const [first, setFirst] = useState(true)

  useEffect(() => {
    dispatch(GetcharterData(periud))
  }, [periud])

  const data = [
    { name: "7 Дней", id: 7 },
    { name: "30 Дней", id: 30 },
    { name: "90 Дней", id: 90 },
    { name: "365 Дней", id: 365 }
  ]

  if (getChart.loading && first) {
    return <div className="loading">
      <MoonLoader
        color={"white"}
        loading={true}
        size={40}
      />
    </div>
  }
  return <div className='Statistics'>
    <div className='StatisticsTitle'>
      <div>
        <p className="Jost500_18" style={{ color: '#FFB800' }} >Личные данные</p>
        <p id="PersonalCabinetTitle" className="Jost500_18" style={{ color: '#FFB800' }} ></p>
      </div>
      <Select defaultValue={7} onChange={(e) => {
        setFirst(false)
        setPeriud(e)
      }} data={data} multiple={false} label={"Выбрать период"} />
    </div>
    <div className='chartes'>
      <div className='ChartDiv'>
        <Chart title={"Просмотр профиля"} data={getChart.data?.product_data} />
      </div>
      <div className='ChartDiv'>
        <Chart title={"Просмотр продуктов"} data={getChart.data?.data} />
      </div>
    </div>
  </div>
}

export default Statistics