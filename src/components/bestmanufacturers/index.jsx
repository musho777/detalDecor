import Carousel from 'react-spring-3d-carousel';
import { ProductCardWrapper } from './ProductCardWrapper'
import AliceCarousel from 'react-alice-carousel';
export const Bestmanufacturers = () => {

  const slides = [
    { content: <ProductCardWrapper />, key: 1 },
    { content: <ProductCardWrapper />, key: 2 },
    { content: <ProductCardWrapper />, key: 3 },
  ]
  const slides1 = [
    <ProductCardWrapper />,
    <ProductCardWrapper />,
    <ProductCardWrapper />,
  ]
  return <div>
    <div className='Bestmanufacturers'>
      <Carousel
        slides={slides}
        showNavigation={true}
      />
    </div>
    <div className='Bestmanufacturers1'>
      <AliceCarousel
        disableButtonsControls={true}
        autoPlay={false}
        mouseTracking={false}
        items={slides1}
        touchMoveDefaultEvents
        touchTracking={false}
      />
    </div>
  </div>
}