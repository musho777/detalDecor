import { SearchSvg } from '@/assets/Svg'
const Search = () => {

  return <div className='Searchinput'>
    <input placeholder='Поиск' />
    <div>
      <SearchSvg />
    </div>
  </div>
}
export default Search