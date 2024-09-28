import { StarSvg2 } from '@/assets/Svg'
import './styles.css'

export const ReviewsText = () => {

  return <div className='ReviewsText'>
    <div className='ReviewsTextItem'>
      <div className='ReviewsTextItemRate'>
        <div className='ReviewsTextItemUser'>
          <img
            src={`https://detaldecor.digiluys.com/uploads/Products/664f89cecf6301716488654.jpg`}
            alt='#'
          />
          <div className='ReviewsTextItemUserName'>
            <p className='Jost500_18'>Татьяна</p>
            <p className='Jost400_13' style={{ color: '#BFBFBF', width: '100%' }}>8 июня, 14:00</p>
          </div>
        </div>
        <div>
          <StarSvg2 />
          <StarSvg2 />
          <StarSvg2 />
          <StarSvg2 />
          <StarSvg2 />
        </div>
      </div>
      <div className='Jost400_14' style={{ lineHeight: "20.23px" }}>"Я в восторге от моего нового кухонного гарнитура! Дизайн просто великолепный, каждая деталь продумана до мелочей. Удобные полки и шкафчики, много места для хранения. Теперь готовить стало намного приятнее!"</div>
    </div>
  </div>
}