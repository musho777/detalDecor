import './styles.css'
import Card from '../card'
import { useEffect, useState } from 'react'
const CardWrapper = ({ data, loading }) => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    setShow(true)
  }, [])
  if (loading && show) {
    return <div className='CardWrapper'>
      <Card loading />
      <Card loading />
      <Card loading />
      <Card loading />
    </div>
  }
  return <div className='CardWrapper'>
    {data.map((elm, i) => {
      console.log(data, 'data1')
      return <Card
        fields={elm.fields}
        index={i}
        data={elm}
        key={i}
      />
    })}
  </div>
}

export default CardWrapper