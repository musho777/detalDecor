"use client"

import { useEffect, useState } from 'react';
import CategoryItem from '../categoriItem';
import './styles.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const CateogryList = ({ data, loading }) => {
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
        <CategoryItem loading={true} key={index} title={`Кухня`} />
      ));
      setItem(temp)
    }
    else {
      temp = []
      data.map((elm, index) => {
        temp.push(
          <CategoryItem key={index} title={`Кухня ${elm.name}`} />
        )
      })
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
