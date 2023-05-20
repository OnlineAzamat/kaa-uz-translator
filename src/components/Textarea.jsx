import { Box } from "@mui/material";
import axios from "axios";
import { useRef, useState } from "react";

function Textarea() {

  const [juwap, setJuwap] = useState("")
  const [clean, setClean] = useState(null)

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

    e.target.style.borderColor = e.target.value.length >= 99 ? 'red' : 'black'
    setClean(e.target.value.length >= 1 ? <span className="clean"><i className="bi bi-x-lg"></i></span> : null)
  }

  const [text, setText] = useState('');
  const tekst = useRef(null)

  function tekser() {
    tekst.current.value = "";
  }

  return (
    <div className="textarea-wrapper">
      <Box sx={{ position: "relative", width: "100%" }}>
        <textarea 
          placeholder="Tekst kiritiń..." 
          maxLength={100}
          onChange={translate}
          ref={tekst}
        />
        <div className="limit">{text.length} / 100</div>
        <span onClick={tekser}>
          {
            clean
          }
        </span>
      </Box>
      <Box sx={{ width: "100%" }}>
        <textarea value={juwap} placeholder="Awdarması..."></textarea>
      </Box>
    </div>
  )
}

export default Textarea;