"use client"
import { SinglImage } from './component/singlImage/index'
import { SinglPrice } from './component/singlPrice/index'
import { SinglInfo } from './component/singl_info/index'
import { OrderItem } from './component/orderItem'
import { ReviewsText } from './component/ReviewsText'
import './styles.css'
import Card from '@/components/card'

const SinglPage = () => {
  return <div className='singlPage'>
    <div className='singlPageDataInfo'>
      <div className='SinglImageDivWrapper'>
        <SinglImage />
        <SinglInfo />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <SinglPrice />
      </div>
    </div>
    <div className='offeredDiv'>
      <p>Ещё предложения от “Русское дерево”:</p>
      <div className='offeredItemWrapper'>
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </div>
      <div className='Reviews'>
        <p>Отзывы (200)</p>
        <div>
          <img
            className='ReviewsImage'
            src={`https://detaldecor.digiluys.com/uploads/Products/664f89cecf6301716488654.jpg`}
            alt='#'
          />
          <img
            className='ReviewsImage'
            src={`https://detaldecor.digiluys.com/uploads/Products/664f89cecf6301716488654.jpg`}
            alt='#'
          />
          <img
            className='ReviewsImage'
            src={`https://detaldecor.digiluys.com/uploads/Products/664f89cecf6301716488654.jpg`}
            alt='#'
          />
          <img
            className='ReviewsImage'
            src={`https://detaldecor.digiluys.com/uploads/Products/664f89cecf6301716488654.jpg`}
            alt='#'
          />
          <img
            className='ReviewsImage'
            src={`https://detaldecor.digiluys.com/uploads/Products/664f89cecf6301716488654.jpg`}
            alt='#'
          />
          <img
            className='ReviewsImage'
            src={`https://detaldecor.digiluys.com/uploads/Products/664f89cecf6301716488654.jpg`}
            alt='#'
          />
          <img
            className='ReviewsImage'
            src={`https://detaldecor.digiluys.com/uploads/Products/664f89cecf6301716488654.jpg`}
            alt='#'
          />
          <img
            className='ReviewsImage'
            src={`https://detaldecor.digiluys.com/uploads/Products/664f89cecf6301716488654.jpg`}
            alt='#'
          />
          <img
            className='ReviewsImage'
            src={`https://detaldecor.digiluys.com/uploads/Products/664f89cecf6301716488654.jpg`}
            alt='#'
          />
          <img
            className='ReviewsImage'
            src={`https://detaldecor.digiluys.com/uploads/Products/664f89cecf6301716488654.jpg`}
            alt='#'
          />

        </div>
      </div>
      <div className='ReviewsTextWrapper'>
        <ReviewsText />
        <ReviewsText />
        <ReviewsText />
        <ReviewsText />
        <ReviewsText />
        <ReviewsText />
        <ReviewsText />
        <ReviewsText />
      </div>
      <div className='Seealso'>
        <p>Смотреть также</p>
        <div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  </div >
}

export default SinglPage