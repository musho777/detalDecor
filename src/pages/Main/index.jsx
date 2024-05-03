import Header from '../../components/header/index'
import CateogryList from '../../components/CateogryList'
const Main = () => {
  return <div>
    <Header />
    <div className='CateogrySlider'>
      <CateogryList />
    </div>
  </div>
}

export default Main