import './styles.css'
import Card from '../card'
const CardWrapper = ({ data, loading }) => {
  if (loading) {
    return <div className='CardWrapper'>
      <Card loading />
      <Card loading />
      <Card loading />
      <Card loading />
    </div>
  }
  return <div className='CardWrapper'>
    {data.map((elm, i) => {
      console.log(elm)
      return <Card
        fields={elm.fields}
        index={i}
        data={elm}
        key={i}
      />
    })}
  </div>
}

export default CardWrapper