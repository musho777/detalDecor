"use client"
import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
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


export default function Selects({ data, error, onChange, label, multiple = true, defaultValue }) {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === 'string' ? value.split(',') : value,
    );
    onChange(value)
  };

  React.useEffect(() => {
    setPersonName(defaultValue)
  }, [defaultValue])

  if (multiple)
    return (
      <div className='Input'>
        <label >{label}</label>
        <FormControl sx={{ width: "100%" }} error={error}>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple={multiple}
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput notched={false} style={{ borderRadius: 0, outline: "none" }} label={"Имя"} />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {data?.map((name) => (
              <MenuItem onClick={() => onChange(name.id)} key={name.id} value={name.name}>
                <Checkbox checked={personName.indexOf(name.name) > -1} />
                <ListItemText primary={name.name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  else {
    return <div className='Input'>
      <label >{label}</label>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={personName}
          onChange={handleChange}
        >
          {data.map((elm, i) => {
            return <MenuItem value={elm.id}>{elm.name}</MenuItem>
          })}
        </Select>
      </FormControl>
    </div>
  }
}