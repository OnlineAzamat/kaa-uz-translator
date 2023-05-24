/* eslint-disable react/no-unescaped-entities */
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

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

  function swapSelectLang() {
    if (til1 == "kaa") {
      setTil("kaa")
      window.localStorage.setItem("til2", "kaa")
      window.localStorage.setItem("til1", "uz")
    } else {
      setTil("uz")
      window.localStorage.setItem("til1", "kaa")
      window.localStorage.setItem("til2", "uz")
    }
  }

  return (
    <div className='select-lang-container'>
      <FormControl sx={{ m: 1, minWidth: 120, margin: { sm: "0", xs: "0" } }}>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          onChange={handleChange}
          title="Kiritilgen tekst tili"
          value={til1 ? til1 : "kaa"}
        >
          <MenuItem value="kaa">Qaraqalpaqsha</MenuItem>
          <MenuItem value="uz">O'zbekcha</MenuItem>
        </Select>
      </FormControl>
      <div className="swap"onClick={swapSelectLang}>
        <SwapHorizIcon />
      </div>
      <FormControl sx={{ m: 1, minWidth: 120, margin: { sm: "0", xs: "0" } }}>
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