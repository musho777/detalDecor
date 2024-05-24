import Carousel from 'react-spring-3d-carousel';
import { ProductCardWrapper } from './ProductCardWrapper'
import AliceCarousel from 'react-alice-carousel';
import { useState } from 'react';
export const Bestmanufacturers = () => {
  const [goToSlide, setGoToSlide] = useState(null);

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
  const table = slides.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });
  return <div>
    <div className='Bestmanufacturers'>
      <Carousel
        goToSlide={goToSlide}
        slides={table}
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