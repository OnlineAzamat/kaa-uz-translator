import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLang() {
  const [til, setTil] = React.useState('');

  const handleChange = (event) => {
    let til_event = event.target.value;

    if(til_event == "kaa") {
      setTil("uz")
      window.localStorage.setItem("til1", "kaa")
      window.localStorage.setItem("til2", "uz")
    } else {
      setTil("kaa")
      window.localStorage.setItem("til2", "kaa")
      window.localStorage.setItem("til1", "uz")
    }
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Til</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Til"
          onChange={handleChange}
          title="Kiritilgen tekst tili"
        >
          <MenuItem value="kaa" selected="selected">Qaraqalpaqsha</MenuItem>
          <MenuItem value="uz">O'zbekcha</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          displayEmpty
          value={til}
          inputProps={{ 'aria-label': 'Without label' }}
          title="Awdarmalangan tekst tili"
          disabled
        >
          <MenuItem value="kaa">Qaraqalpaqsha</MenuItem>
          <MenuItem value="uz" selected="selected">O'zbekcha</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}