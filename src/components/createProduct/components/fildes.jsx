import TeaxAre from '@/UI/textAre'
import UIInput from '@/UI/input';
const Fildes = ({ type, error, value, handelChange, id, lable, lang }) => {
  if (type == "textarea") {
    return <TeaxAre
      error={lang == "am" && error}
      value={value}
      onChange={(e) => handelChange(e, id)}
      label={lable}
    />
  }
  else {
    return <UIInput
      error={lang == "am" && error}
      value={value}
      onChange={(e) => handelChange(e, id)}
      type={type}
      label={lable}
    />
  }
}

export default Fildes