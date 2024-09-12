import './styles.css'
import { EyeSvg, StarSvg } from '@/assets/Svg'

export const SinglInfo = () => {
  return <div className='singlPageDataWrapper'>
    <div>
      <div className='SinglCategory'>
        <p className='Jost400_13 SinglCategoryItem'>Кухня</p>
        <p className='Jost400_13 SinglCategoryItem'>Русское дерево</p>
      </div>
      <div className='SingliconeWrapeerDiv'>
        <p className='singlTitle Jost600_24'>Кухонный гарнитур сказка</p>
        <div className='SingliconeWrapeer'>
          <div>
            <StarSvg />
            <p className='Jost500_18'>4,8</p>
          </div>
          <div>
            <EyeSvg />
            <p className='Jost500_18'>4,8</p>
          </div>
        </div>
      </div>
    </div>
    <div className='singlPageDataDivDiv'>
      <div className='singlPageDataDiv'>
        <div className='singlPageData'>
          <p className='singlPageTitle Jost400_13'>Артикул:</p>
          <p className='Jost400_13'>234552443</p>
        </div>
        <div className='singlPageData'>
          <p className='singlPageTitle Jost400_13'>Состав:</p>
          <p className='Jost400_13'>Дерево, ЛДСП</p>
        </div>
        <div className='singlPageData'>
          <p className='singlPageTitle Jost400_13'>Состав:</p>
          <p className='Jost400_13'>Дерево, ЛДСП</p>
        </div>
        <div className='singlPageData'>
          <p className='singlPageTitle Jost400_13'>Состав:</p>
          <p className='Jost400_13'>Дерево, ЛДСП</p>
        </div>
        <div className='singlPageData'>
          <p className='singlPageTitle Jost400_13'>Страна производства:</p>
          <p className='Jost400_13'>Россиия</p>
        </div>
      </div>
      <p className='Jost400_13' style={{ color: '#BFBFBF' }}>Все характеристики и описание</p>
    </div>
  </div>
}