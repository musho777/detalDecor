import { EyeSvg, StarSvg } from '@/assets/Svg'
import { ManCard } from '@/components/bestmanufacturers/productCard/index'

export const ProductCardWrapper = () => {
  return <div className="ProductCardWrapper">
    <div className='bestmanufacturersLogoWrapperMobile'>
      <div className='RaringDiv'>
        <StarSvg />
        <p>4,7</p>
      </div>
      <div className='RaringDiv'>
        <EyeSvg />
        <p>1200</p>
      </div>
    </div>
    <div className='bestmanufacturersLogoWrapper'>
      <div className='bestmanufacturersLogoWrapper1'>
        <img className='bestmanufacturersLogo' src='data:image/png;base64,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' />
        <div>
          <p className='Jost600_28'>Русское дерево</p>
          <p className='Jost400'>Россия</p>
        </div>
      </div>
      <div className='bestmanufacturersLogoWrapper2'>
        <div className='RaringDiv'>
          <StarSvg />
          <p>4,7</p>
        </div>
        <div className='RaringDiv'>
          <EyeSvg />
          <p>1200</p>
        </div>
      </div>
    </div>
    <div className='ProductCardWrapperCategory'>
      <div>
        <p className='Jost400'>Кухня</p>
      </div>
      <div>
        <p className='Jost400'>Кухня</p>
      </div>
      <div>
        <p className='Jost400'>Кухня</p>
      </div>
    </div>
    <div className='ProductCardWrapperItem'>
      <ManCard />
      <ManCard />
      <ManCard />
    </div>
  </div>
}