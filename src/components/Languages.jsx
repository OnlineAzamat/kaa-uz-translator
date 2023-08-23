import languages from "./languages/languages";

const Languages = ({ close, lang2, lang1, checkLang }) => {

  function backClose(e) {
    if(e.target.classList[0] == "langs-container") {
      close()
    }
  }

  function changeLang(lang) {
    if(checkLang == "til1") {
      lang1(lang)
    } else (
      lang2(lang)
    )
    close()
  }

  return (
    <div className='langs-container' onClick={backClose}>
      <div className="langs-box">
        {languages.map((item, index) => {
          return (
            <button className="lang" key={item + index} value={item.langCode} onClick={() => changeLang(item.langCode)}>{item.name}</button>
          )
        })}

        <button className="close" onClick={close}><i className="bi bi-x-lg"></i></button>
      </div>
    </div>
  )
}

export default Languages