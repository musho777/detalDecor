import { StarSvg, StarSvg2 } from '@/assets/Svg'
import { SinglImage } from './component/singlImage/index'
import { SinglPrice } from './component/singlPrice/index'
import { SinglInfo } from './component/singl_info/index'
import './styles.css'

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
        <div className='offeredItem'>
          <div className='offeredItemDiv'>
            <img
              className='offeredItemImage'
              src={`https://detaldecor.digiluys.com/uploads/Products/664f89cecf6301716488654.jpg`}
              alt='#'
            />
            <div className='orderInfo'>
              <div>
                <p className='Jost600_20'>“Артдеко”</p>
                <p className='Jost400_20'>Модульная кухня</p>
              </div>
              <p className='Jost600_20' style={{ color: '#BFBFBF' }}>98 000 ₽ </p>
            </div>
            <div className='itemStarDiv'>
              <StarSvg2 />
              <p className='Jost500_14'>4,8</p>
            </div>
          </div>
        </div>
        <div className='offeredItem'>
          <div className='offeredItemDiv'>
            <img
              className='offeredItemImage'
              src={`https://detaldecor.digiluys.com/uploads/Products/664f89cecf6301716488654.jpg`}
              alt='#'
            />
            <div className='orderInfo'>
              <div>
                <p className='Jost600_20'>“Артдеко”</p>
                <p className='Jost400_20'>Модульная кухня</p>
              </div>
              <p className='Jost600_20' style={{ color: '#BFBFBF' }}>98 000 ₽ </p>
            </div>
            <div className='itemStarDiv'>
              <StarSvg2 />
              <p className='Jost500_14'>4,8</p>
            </div>
          </div>
        </div>
        <div className='offeredItem'>
          <div className='offeredItemDiv'>
            <img
              className='offeredItemImage'
              src={`https://detaldecor.digiluys.com/uploads/Products/664f89cecf6301716488654.jpg`}
              alt='#'
            />
            <div className='orderInfo'>
              <div>
                <p className='Jost600_20'>“Артдеко”</p>
                <p className='Jost400_20'>Модульная кухня</p>
              </div>
              <p className='Jost600_20' style={{ color: '#BFBFBF' }}>98 000 ₽ </p>
            </div>
            <div className='itemStarDiv'>
              <StarSvg2 />
              <p className='Jost500_14'>4,8</p>
            </div>
          </div>
        </div>
        <div className='offeredItem'>
          <div className='offeredItemDiv'>
            <img
              className='offeredItemImage'
              src={`https://detaldecor.digiluys.com/uploads/Products/664f89cecf6301716488654.jpg`}
              alt='#'
            />
            <div className='orderInfo'>
              <div>
                <p className='Jost600_20'>“Артдеко”</p>
                <p className='Jost400_20'>Модульная кухня</p>
              </div>
              <p className='Jost600_20' style={{ color: '#BFBFBF' }}>98 000 ₽ </p>
            </div>
            <div className='itemStarDiv'>
              <StarSvg2 />
              <p className='Jost500_14'>4,8</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default SinglPage