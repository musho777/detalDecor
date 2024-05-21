import TeaxAre from '@/UI/textAre'
import UIInput from '@/UI/input';
const Fildes = ({ type, error, value, handelChange, id, lable }) => {
  if (type == "textarea") {
    return <TeaxAre
      error={error}
      value={value}
      onChange={(e) => handelChange(e, id)}
      label={lable}
    />
  }
  else {
    return <UIInput
      error={error}
      value={value}
      onChange={(e) => handelChange(e, id)}
      type={type}
      label={lable}
    />
  }
}

export default Fildes