import axios from "axios";
import { useRef, useState } from "react";
import { Box } from "@mui/material";
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

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

  function pasteText() {
    navigator.clipboard.readText()
      .then(cliptext => tekst.current.value = cliptext)
    console.log(navigator.clipboard.readText())
  }
  function copyText() {
    navigator.clipboard.writeText('a')
  }

  return (
    <div className="textarea-wrapper">
      <Box sx={{ position: "relative", width: "100%" }}>
        <span onClick={tekser}>
          {
            clean
          }
        </span>
        <textarea 
          placeholder="Tekst kiritiń..." 
          maxLength={5000}
          onChange={translate}
          ref={tekst}
        />
        <div className="control">
          <div className="paste" onClick={pasteText}><ContentPasteIcon /></div>
          <div className="limit">{text.length} / 5000</div>
        </div>
      </Box>
      <Box sx={{ position: "relative", width: "100%" }}>
        <textarea value={juwap} placeholder="Awdarması..."></textarea>
        <div className="control">
          <div className="copy"><ContentCopyIcon /></div>
        </div>
      </Box>
    </div>
  )
}

export default Textarea;