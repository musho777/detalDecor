import { StarSvg2 } from "@/assets/Svg"

export const OrderItem = () => {
  return <div className='offeredItem'>
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
}