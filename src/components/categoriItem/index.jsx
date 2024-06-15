"use client"
import './styles.css'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import TruncateText from '../../functions/truncateText'
import { useRouter } from 'next/navigation'


const CategoryItem = ({ title, loading, img, url }) => {
  const router = useRouter()
  if (loading) {
    return <div className='CategoriItemLoading'>
      <Skeleton baseColor="#282929" highlightColor="#3a3c3d" />
    </div>
  }
  return <div onClick={() => router.push(`/catalog/${url}`)} className='CategoriItem'>
    <div className='CategoriItemImgWrapper'>
      <img
        onDragStart={(e) => e.preventDefault()}
        src={`https://detaldecor.digiluys.com/${img}`}
        className='CategoriItemImg'
        alt='#'
      />
    </div>
    <p id="CateogriTitle" className='Jost300_24'>{TruncateText(title, 15)}</p>
  </div>
}


CategoryItem.displayName = 'CategoryItem';
export default CategoryItem