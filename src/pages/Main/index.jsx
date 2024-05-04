import Header from '../../components/header/index'
import CateogryList from '../../components/CateogryList'
import Carusel from '../../components/Carusel'
const Main = () => {
  return <div>
    <Header />
    <div className='CateogrySlider'>
      <CateogryList />
      <Carusel />
    </div>
  </div>
}

export default Main