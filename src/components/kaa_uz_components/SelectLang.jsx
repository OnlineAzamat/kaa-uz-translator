/* eslint-disable react/no-unescaped-entities */
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { useTranslation } from 'react-i18next';

import Languages from '../Languages';

export default function SelectLang() {
  const [langs, setLangs] = useState(false);
  const [checkLang, setCheckLang] = useState();

  const { t } = useTranslation();

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

  function lang2(lang) {
    window.localStorage.setItem("til2", lang)
  }
  function lang1(lang) {
    window.localStorage.setItem("til1", lang)
  }

  function otherLang(til) {
    if(til == "til1") {
      setCheckLang("til1")
    } else {
      setCheckLang("til2")
    }
    setLangs(true)
  }
  function close() {
    setLangs(false)
  }

  return (
    <div className='select-lang-container'>
      <FormControl sx={{ m: 1, minWidth: 120, margin: { sm: "0", xs: "0" } }}>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          onChange={handleChange}
          title={t("input_text_language")}
          value={til1 == "kaa" ? til1 : "uz"}
        >
          <MenuItem value="kaa">Qaraqalpaqsha</MenuItem>
          <MenuItem value="uz">O'zbekcha</MenuItem>
        </Select>
      </FormControl>
      <button className="more-languages" onClick={() => otherLang("til1")}><i className="bi bi-chevron-down" style={{ transform: `rotate(${langs ? 180 : 0}deg)`, display: "block", transition: ".25s" }}></i></button>
      <div className="swap"onClick={swapSelectLang}>
        <SwapHorizIcon />
      </div>
      <FormControl sx={{ m: 1, minWidth: 120, margin: { sm: "0", xs: "0" } }}>
        <Select
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          title={t("translated_text_language")}
          value={til2 == "uz" ? til2 : "kaa"}
          disabled
        >
          <MenuItem value="kaa">Qaraqalpaqsha</MenuItem>
          <MenuItem value="uz">O'zbekcha</MenuItem>
        </Select>
      </FormControl>
      <button className="more-languages" onClick={() => otherLang("til2")}><i className="bi bi-chevron-down" style={{ transform: `rotate(${langs ? 180 : 0}deg)`, display: "block", transition: ".25s" }}></i></button>
      {langs ? <Languages close={close} lang2={lang2} lang1={lang1} checkLang={checkLang} /> : null}
    </div>
  );
}