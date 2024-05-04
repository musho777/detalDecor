import './styles.css'
import { KithcenSvg } from '@/assets/Svg'
import { useEffect, useRef, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CategoryItem = ({ title, loading }) => {

  if (title == 1) {
    return <div className='CategoriItemLoading'>
      <Skeleton baseColor="#282929" highlightColor="#3a3c3d" />
    </div>
  }
  return <div className='CategoriItem'>
    <KithcenSvg className="CategoriSvg" />
    <p id="CateogriTitle" className='Jost300_24'>{title}</p>
  </div>
}


CategoryItem.displayName = 'CategoryItem';
export default CategoryItem