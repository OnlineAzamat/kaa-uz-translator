import { Box } from "@mui/material"
import axios from "axios";
import { useState } from "react";

function Textarea() {

  const [juwap, setJuwap] = useState({})

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

    console.log(juwap);
  }

  return (
    <div className="textarea-wrapper">
      <textarea placeholder="Text..." onChange={translate} />
      <textarea value={juwap}></textarea>
    </div>
  )
}

export default Textarea;