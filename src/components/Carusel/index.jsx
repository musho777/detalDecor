
"use client"
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import './styles.css'
import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Carusel = ({ loading, data }) => {

  const [item, setItem] = useState([])

  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

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
    let temp = []
    if (!loading) {
      data.map((elm, i) => {
        temp.push(<img
          key={i}
          className='CaruselImage'
          src={`https://detaldecor.digiluys.com/${elm.photo}`}
          alt='#'
          onDragStart={(e) => e.preventDefault()}
        />)
      })
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
