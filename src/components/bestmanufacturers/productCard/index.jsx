import '../styles.css'
import { BasketIcone } from '@/assets/Svg'
export const ManCard = () => {
  return <div className='ManCard'>
    <div style={{ width: '100%' }}>
      <img
        className='ManCardImage'
        src={`https://i.pinimg.com/236x/45/6a/3f/456a3f31048c851f8e24a47f20f2889a.jpg`}
        alt='#'
        onDragStart={(e) => e.preventDefault()}
      />
      {/* <AliceCarousel
        disableButtonsControls={true}
        autoPlay={false}
        mouseTracking={true}
        items={item}
        infinite={true}
        touchMoveDefaultEvents
        touchTracking={true}
        disableDotsControls
      /> */}
    </div>
    <div className='ManCardPriceDiv'>
      <p style={{ color: '#000000' }} className='Jost400'>Кухня «Деревенская»</p>
      <div className='ManCardPrice'>
        <p style={{ color: "#363F41" }} className='Jost500_14'>1,350,000 руб.</p>
        <BasketIcone />
      </div>
    </div>
  </div>
}