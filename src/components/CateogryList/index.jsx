"use client"

import { useEffect, useState } from 'react';
import CategoryItem from '../categoriItem';
import './styles.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const CateogryList = ({ children }) => {
  const [loading, setLoading] = useState(false)
  let [item, setItem] = useState([])
  const responsive = {
    0: { items: 2 },
    375: { items: 3 },
    460: { items: 3 },
    568: { items: 4 },
    1024: { items: 6 },
    1440: { items: 8 },
  };

  useEffect(() => {
    let temp = [...item]
    if (loading) {
      temp = Array.from({ length: 17 }, (_, index) => (
        <CategoryItem key={index} title={`Кухня ${index + 1}`} />
      ));
      setItem(temp)
    }
    else {
      temp = Array.from({ length: 8 }, (_, index) => (
        <CategoryItem loading key={index} title={`${index + 1}`} />
      ));
      setItem(temp)
    }
  }, [loading])

  return (
    <div className='CateogryList'>
      <AliceCarousel
        mouseTracking
        items={item}
        infinite={true}
        paddingLeft={0}
        paddingRight={20}
        responsive={responsive}
        disableButtonsControls
        disableDotsControls
      />

    </div>
  );
};

export default CateogryList;
