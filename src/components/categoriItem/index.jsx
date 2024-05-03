import { forwardRef, useEffect } from 'react';
import './styles.css'
import { KithcenSvg } from '@/assets/Svg'
const CategoryItem = forwardRef((props, ref) => {
  useEffect(() => {
    if (ref && ref.current) {
      const width = ref.current.offsetWidth;
    }
  }, [ref]);

  return <div className='CategoriItem' ref={ref}>
    <KithcenSvg className="CategoriSvg" />
    <p id="CateogriTitle" className='Jost300_24'>{props.title}</p>
  </div>
})
CategoryItem.displayName = 'CategoryItem';
export default CategoryItem