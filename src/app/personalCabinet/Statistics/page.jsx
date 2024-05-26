"use client"
import './styles.css'
import { Chart } from '../../../UI/chart'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { GetcharterData } from '../../../services/action/action'
const Statistics = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetcharterData())
  }, [])


  const getChart = useSelector((st) => st.getChart)
  console.log(getChart, 'getChart')
  return <div className='Statistics'>
    <div className='ChartDiv'>
      <Chart data={getChart.data?.product_data} />
    </div>
    <div className='ChartDiv'>
      <Chart data={getChart.data?.data} />
    </div>
  </div>
}

export default Statistics