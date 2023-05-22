/* eslint-disable react/no-unescaped-entities */
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

export default function SelectLang() {

  const [til, setTil] = useState('');
  
  const til1 = window.localStorage.getItem('til1');
  const til2 = window.localStorage.getItem('til2');

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
          value={til1 ? til1 : "kaa"}
        >
          <MenuItem value="kaa">Qaraqalpaqsha</MenuItem>
          <MenuItem value="uz">O'zbekcha</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          title="Awdarmalangan tekst tili"
          value={til2 ? til2 : "uz"}
          disabled
        >
          <MenuItem value="kaa">Qaraqalpaqsha</MenuItem>
          <MenuItem value="uz">O'zbekcha</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}