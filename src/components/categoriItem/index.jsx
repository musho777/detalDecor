import './styles.css'
import { KithcenSvg } from '@/assets/Svg'
const CategoryItem = ({ title }) => {
  return <div className='CategoriItem' >
    <KithcenSvg className="CategoriSvg" />
    <p id="CateogriTitle" className='Jost300_24'>{title}</p>
  </div>
}
CategoryItem.displayName = 'CategoryItem';
export default CategoryItem