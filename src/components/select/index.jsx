import { DownSvg2 } from '@/assets/Svg'
import './styles.css'
import TruncateText from '@/functions/truncateText'
export const Select = () => {
  return <div className='Select'>
    <div className='SelectHeader'>
      <DownSvg2 />
      <p className='Jost400'>{TruncateText('Каsdofjslkdfjsdlfjklsdfjskdfjskdlfjklsdfjslkdjflksfтегория', 15)}</p>
      <DownSvg2 />
    </div>





    <div></div>
  </div>
}
