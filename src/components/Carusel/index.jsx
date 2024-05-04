
"use client"
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Image from 'next/image'
import './styles.css'
import { useEffect, useState } from 'react'

const Carusel = () => {
  const handleDragStart = (e) => {
    e.preventDefault()
  }

  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    if (typeof window !== 'undefined') {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const items = [
    <img
      key={0}
      className='CaruselImage'
      src={`https://wallpapercave.com/wp/wp4566576.jpg`}
      alt='#'
      onDragStart={handleDragStart}
    />,
    <img
      key={1}
      className='CaruselImage'
      src={`https://sofia-decor.ru/upload/iblock/6d6/6d6cd199a9cd5f9d4b39df370bf45629.png`}
      alt='#'
      onDragStart={handleDragStart}

    />,
    <img
      key={1}
      className='CaruselImage'
      src={`https://sofia-decor.ru/upload/iblock/6d6/6d6cd199a9cd5f9d4b39df370bf45629.png`}
      alt='#'
      onDragStart={handleDragStart}
    />,
  ];

  return (
    <div style={{ width: '100%' }}>
      <AliceCarousel
        disableButtonsControls={true}
        autoPlay={true}
        mouseTracking={true}
        items={items}
        paddingLeft={windowSize.width > 600 ? 50 : 20}
        paddingRight={windowSize.width > 600 ? 50 : 20}
        infinite={true}
        touchMoveDefaultEvents
        touchTracking={true}
        autoPlayInterval={10000}
        disableDotsControls
      />
    </div>
  );
}

export default Carusel;
