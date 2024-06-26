import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import './styles.css'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


export default function UISelect({ data, error, onChange, label, label1, multiple = true }) {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  return (
    <div className='UiSelect'>
      <p id="label" className='Jost400'>{label}</p>
      <FormControl sx={{ width: "100%" }} error={error}>
        <InputLabel id="demo-multiple-checkbox-label">{label1}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple={multiple}
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput style={{ borderRadius: 0 }} label={label1} />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {data?.map((name, i) => (
            <MenuItem key={i} onClick={() => onChange(name.id)} value={name.name}>
              <Checkbox checked={personName.indexOf(name.name) > -1} />
              <ListItemText primary={name.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}