import { DownSvg2 } from '@/assets/Svg'
import './styles.css'
import TruncateText from '@/functions/truncateText'
import { useEffect, useRef, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
export const Select = ({
  svg,
  data,
  selectType = "singl",
  defaultValue,
  defaultSelect,
  onSelect,
  width,
  loading
}) => {

  const ref = useRef()
  const [open, setOpen] = useState(false)
  const [select, setSelect] = useState(defaultSelect)

  const SelectItem = (data) => {
    if (selectType == 'singl') {
      setSelect(data)
      onSelect(data)
    }
    else {
      let item = [...select]
      item.push(data)
      setSelect(item)
      onSelect(item)
    }
  }

  useEffect(() => {
    setSelect(defaultSelect)
  }, [defaultSelect])
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



  return <div style={{ width: width }} ref={ref} onClick={() => setOpen(true)} className='Select'>
    <div style={{ width: width }} className='SelectHeader'>
      {!loading ? <div>
        {svg}
        {select ?
          <p className='Jost400'>{TruncateText(select?.name, 15)}</p> :
          <p className='Jost400'>{TruncateText(defaultValue, 15)}</p>}
      </div> :
        <Skeleton width={width - 50} baseColor="#282929" highlightColor="#3a3c3d" />
      }
      <DownSvg2 />
    </div>
    {open &&
      <div className='SelectBody'>
        {data.map((elm, i) => {
          return <div key={i} onClick={() => SelectItem(elm)}>
            <p className='Jost400_14'>{elm.name}</p>
          </div>
        })}
      </div>
    }
  </div>
}
