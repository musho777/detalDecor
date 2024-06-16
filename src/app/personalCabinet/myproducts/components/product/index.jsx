import '../../styles.css'
import { Delate, Edit, EyeSvg, StarSvg } from '@/assets/Svg'
export const Product = () => {
  return <div className='myproductComponent'>
    <div className='Product'>
      <div className='productImage'>
      </div>
      <div className='prodictInfo'>
        <div className='prodictTitle'>
          <p className='Jost400_20'>Кухня «Деревенская»</p>
          <div>
            <EyeSvg />
            <p className='Jost400_16'>1200</p>
          </div>
        </div>
        <div className='prodictInfo2'>
          <p className='Jost400_16'><span className='Jost600'>Фасады:</span> эмаль, Acryl </p>
          <p className='Jost400_16'><span className='Jost600'>Корпус:</span> ДСП, эмаль</p>
          <p className='Jost400_16'><span className='Jost600'>Столешница:</span> Egger</p>
          <p className='Jost400_16'><span className='Jost600'>Длина:</span> 6 м</p>
        </div>
        <div>
          <p className='Jost500_18'>1,350,000 ₽</p>
        </div>
      </div>
    </div>
    <div className='myProductEdit'>
      <Edit />
      <Delate />
    </div>
    <div className='myproductEditMobal'>
      <div>
        <EyeSvg />
        <p className='Jost400_16'>1200</p>
      </div>
      <div className='myProductEdit'>
        <Edit />
        <Delate />
      </div>
    </div>
  </div>
}