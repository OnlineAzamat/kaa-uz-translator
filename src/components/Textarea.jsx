import axios from "axios";
import { useRef, useState } from "react";
import { Box } from "@mui/material";
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function Textarea() {

  const [juwap, setJuwap] = useState("")
  const [clean, setClean] = useState(null)
  const [text, setText] = useState('');

  function translate(e) {
    const data = {
      "body": {
        "lang_from": window.localStorage.getItem("til1") ? window.localStorage.getItem("til1") : "kaa",
        "lang_to": window.localStorage.getItem("til2") ? window.localStorage.getItem("til2") : "uz",
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
  
  const tekst = useRef(null)
  const result_text = useRef(null)

  function tekser() {
    tekst.current.value = "";
  }

  function pasteText() {
    navigator.clipboard.readText()
      .then(cliptext => tekst.current.value = cliptext)
    console.log(navigator.clipboard.readText())
  }
  function copyText() {
    navigator.clipboard.writeText(result_text.current.value)
  }

  return (
    <div className="textarea-wrapper">
      <Box sx={{ position: "relative", width: "100%", padding: "0.7rem 2rem 2rem 0.7rem", borderRadius: "1rem", border: "1px solid black", height: "500px" }}>
        <span onClick={tekser}>
          {
            clean
          }
        </span>
        <textarea 
          placeholder="Tekst kiritiń..." 
          maxLength={5000}
          onChange={translate}
          onPaste={translate}
          ref={tekst}
        />
        <div className="text-control">
          <div className="paste-copy" onClick={pasteText}><ContentPasteIcon />Paste</div>
          <div className="limit" style={{ userSelect: "none" }}>{text.length} / 5000</div>
        </div>
      </Box>
      <Box sx={{ position: "relative", padding: "0.7rem 2rem 2rem 0.7rem", borderRadius: "1rem", width: "100%", border: "1px solid #fff", height: "500px", background: "#efefef" }}>
        <textarea value={juwap} placeholder="Awdarması..." ref={result_text}></textarea>
        <div className="text-control">
          <div className="paste-copy" onClick={copyText}><ContentCopyIcon />Copy</div>
        </div>
      </Box>
    </div>
  )
}

export default Textarea;