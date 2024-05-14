import { useEffect, useState } from 'react';
import "./styles.css"
import { DownSvg } from '@/assets/Svg';
import CheckBox from '../../UI/checkbox'

const UISelect = ({ selectedData, multy, data, error, onChange }) => {

  // useEffect(() => {
  //   document.body.addEventListener('click', () => setIsActive(false));
  //   return () => {
  //     // document.body.removeEventListener('click', setIsActive(false));
  //   };
  // }, [])
  const [isActive, setIsActive] = useState(false);
  return <div id={error ? "selectError" : ""} onClick={(e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsActive(!isActive)
  }} className='select'>
    <div className='seectHeader'>
      {!selectedData.length &&
        <p>{"City"}</p>
      }
      {selectedData?.map((elm, i) => {
        return <p>{elm.name}</p>
      })}
      <div className='downSvgDiv'>
        <DownSvg />
      </div>
    </div>
    <div

      onClick={(e) => {
        e.stopPropagation()
        e.preventDefault()
      }}
      className='sleectOption' id={isActive ? 'activeSelect' : ''}>
      {
        isActive && <div
          onClick={(e) => {
            e.stopPropagation()
            e.preventDefault()
          }}
        >
          {data.map((elm, i) => {
            return <div onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              onChange(elm)
            }
            } className='sleectOptionItem'>
              {multy && <CheckBox checked={selectedData.findIndex((e) => e.name == elm.name) >= 0} />}
              <p className='Jost400_13'>{elm.name}</p>
            </div>
          })}
        </div>
      }
    </div>
  </div>
}

export default UISelect