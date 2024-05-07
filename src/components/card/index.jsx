import './styles.css'
import img from '../../assets/image/img.png'
import Image from 'next/image'
import Skeleton from 'react-loading-skeleton'
import { AddBasket } from '../../assets/Svg'

const Card = ({ loading }) => {
  if (loading) {
    return <div className='CardLoadingWrapper'>
      <div className='CardLoading'>
        <Skeleton baseColor="#282929" highlightColor="#3a3c3d" />
      </div >
    </div>
  }
  return <div className='Card'>
    <Image
      src={img}
      alt='#'
      className='CardImg'
    />
    <div className='CardInfo'>
      <div>
        <p className='Jost500_18'>Кухня «Деревенская»</p>
      </div>
      <div className='CardInfoOpacity'>
        <div className='CardInfoOpacityDiv'>
          <p className='Jost400'>Корпус: ДСП, эмаль</p>
          <p className='Jost400'>Столешница: Egger</p>
          <p className='Jost400'>Длина: 6 м</p>
        </div>
        <div className='CardAddBasket'>
          <p className='Jost500_18' style={{ color: "#FFB800" }}>1,350,000 руб.</p>
          <AddBasket />
        </div>
      </div>
    </div>
  </div>
}

export default Card