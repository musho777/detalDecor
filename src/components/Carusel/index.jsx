
"use client"
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Image from 'next/image'
import './styles.css'
import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Carusel = () => {

  const [loading, setLoading] = useState(true)
  const [item, setItem] = useState([])

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

  useEffect(() => {
    let temp = [...item]
    if (!loading) {
      temp = [
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
      ]
    }
    else {
      temp = [
        <div key={0} className='CaruselImageLoading'>
          <Skeleton baseColor="#282929" highlightColor="#3a3c3d" />
        </div>
      ]
    }
    setItem(temp)
  }, [loading])


  return (
    <div style={{ width: '100%' }}>
      <AliceCarousel
        disableButtonsControls={true}
        autoPlay={true}
        mouseTracking={true}
        items={item}
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
