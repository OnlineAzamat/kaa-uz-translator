import { Box } from "@mui/material";
import axios from "axios";
import { useState } from "react";

function Textarea() {

  const [juwap, setJuwap] = useState(null)

  function translate(e) {
    const data = {
      "body": {
        "lang_from": window.localStorage.getItem("til1"),
        "lang_to": window.localStorage.getItem("til2"),
        "text": e.target.value
      }
    }

    axios.post('https://api.from-to.uz/api/v1/translate', data)
      .then(res => {
        setJuwap(res?.data?.result)
      })
      .catch(err => {
        console.log(err)
      })
    
    setText(e.target.value)
  }

  const [text, setText] = useState('');

  const handleKeyPress = e => {
    if (e.target.value.length >= 99) {
      e.target.style.border = '2px solid red';
    } else {
      e.target.style.border = 'none';
    }
  };

  return (
    <div className="textarea-wrapper">
      <Box sx={{ position: "relative", width: "100%" }}>
        <textarea 
          placeholder="Text..." 
          maxLength={100}
          onKeyDown={handleKeyPress}
          onChange={translate}
        />
        <div className="limit">{text.length} / 100</div>
      </Box>
      <textarea value={juwap}></textarea>
    </div>
  )
}

export default Textarea;