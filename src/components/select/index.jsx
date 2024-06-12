import { DownSvg2 } from '@/assets/Svg'
import './styles.css'
import TruncateText from '@/functions/truncateText'
import { useEffect, useRef, useState } from 'react'
export const Select = () => {
  const ref = useRef()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return <div ref={ref} onClick={() => setOpen(true)} className='Select'>
    <div className='SelectHeader'>
      <DownSvg2 />
      <p className='Jost400'>{TruncateText('Каsdofjslkdfjsdlfjklsdfjskdfjskdlfjklsdfjslkdjflksfтегория', 15)}</p>
      <DownSvg2 />
    </div>
    {open &&
      <div className='SelectBody'>
        <div>
          <p className='Jost400_14'>Популярные</p>
        </div>
        <div>
          <p className='Jost400_14'>Популярные</p>
        </div>
        <div>
          <p className='Jost400_14'>Популярные</p>
        </div>
        <div>
          <p className='Jost400_14'>Популярные</p>
        </div>
      </div>
    }
  </div>
}
