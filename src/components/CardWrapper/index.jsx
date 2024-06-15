import './styles.css'
import Card from '../card'
import '../Carusel/styles.css'
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
    {data?.map((elm, i) => {
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