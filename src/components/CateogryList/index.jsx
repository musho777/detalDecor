"use client"

import CategoryItem from '../categoriItem'

import './styles.css';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const CateogryList = ({ children }) => {

  const responsive = {
    0: { items: 2 },
    375: { items: 3 },
    460: { items: 3 },
    568: { items: 4 },
    1024: { items: 6 },
    1440: { items: 8 },

  };
  const items = [
    <CategoryItem title={"Кухня 1"} />,
    <CategoryItem title={"Кухня 1"} />,
    <CategoryItem title={"Кухня 1"} />,
    <CategoryItem title={"Кухня 1"} />,
    <CategoryItem title={"Кухня 1"} />,
    <CategoryItem title={"Кухня 1"} />,
    <CategoryItem title={"Кухня 1"} />,
    <CategoryItem title={"Кухня 1"} />,
    <CategoryItem title={"Кухня 1"} />,
    <CategoryItem title={"Кухня 1"} />,
    <CategoryItem title={"Кухня 1"} />,
    <CategoryItem title={"Кухня 1"} />,
    <CategoryItem title={"Кухня 1"} />,
    <CategoryItem title={"Кухня 1"} />,
    <CategoryItem title={"Кухня 1"} />,
    <CategoryItem title={"Кухня 1"} />,
  ];



  return (
    <div className='CateogryList'>
      <AliceCarousel
        mouseTracking
        items={items}
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

