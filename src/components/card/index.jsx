import './styles.css'
import Skeleton from 'react-loading-skeleton'
import { AddBasket } from '../../assets/Svg'
import AliceCarousel from 'react-alice-carousel'
import { useEffect, useState } from 'react'


const Card = ({ fields, loading, data, index }) => {
  const handleDragStart = (e) => {
    e.preventDefault()
  }
  const [temp, setTemp] = useState([])
  useEffect(() => {
    let item = []
    data?.photo.map((elm, i) => {
      item.push(<img
        key={i}
        className='CardImg'
        src={`https://detaldecor.digiluys.com/${elm.photo}`}
        alt='#'
        onDragStart={handleDragStart}
      />)
    })
    setTemp(item)
  }, [data])

  if (loading) {
    return <div className='CardLoadingWrapper'>
      <div className='CardLoading'>
        <Skeleton baseColor="#282929" highlightColor="#3a3c3d" />
      </div >
    </div>
  }
  return <div className='Card'>
    <div className='cardCarusel'>
      <AliceCarousel
        disableButtonsControls={true}
        mouseTracking={true}
        items={temp}
        autoPlay={true}
        infinite={true}
        autoPlayInterval={5000 + (index * 250)}
        touchMoveDefaultEvents
        touchTracking={true}
        disableDotsControls
      />
    </div>
    <div className='CardInfo'>
      <div>
        <p className='Jost500_18'>{data?.name}</p>
      </div>
      <div className='CardInfoOpacity'>
        <div className='CardInfoOpacityDiv'>
          {fields?.map((elm, i) => {
            if (i < 3) {
              return <div key={i}>
                <span className='Jost500'>{elm.field_name.label_am}:</span>
                <p className='Jost400'> {elm.value_am} </p>
              </div>
            }
          })}
        </div>
        <div className='CardAddBasket'>
          <p className='Jost500_18' style={{ color: "#FFB800" }}>{data?.price} {data?.currencys?.name
          }</p>
          <AddBasket />
        </div>
      </div>
    </div>
  </div>
}

export default Card