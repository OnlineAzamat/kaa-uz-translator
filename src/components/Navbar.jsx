/* eslint-disable react/no-unescaped-entities */
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import { useLocation } from "react-router";

import { Translate } from "@mui/icons-material";

const Navbar = () => {
  const { pathname } = useLocation()

  const { t } = useTranslation();

  const [activeLang, setActiveLang] = useState("langs")
  const langs = useRef(null)

  function pageLang() {
    if (activeLang === "langs") {
      setActiveLang("langs active-lang")
    } else {
      setActiveLang("langs")
    }
  }

  const pageChangeLang = (lang) => {
    changeLanguage(lang);
  }

  return (
    <div className="navbar-container">
      <div className="menu">
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <ul className="navbar-items">
        <Link to="/" className={pathname == "/" ? "navbar-item active" : "navbar-item"}>
          <li>
            {t('home')}
          </li>
        </Link>
        <Link to="/transliterate" className={pathname == "/transliterate" ? "navbar-item active" : "navbar-item"}>
          <li>
            {t('transliteration')}
          </li>
        </Link>
      </ul>

      <div className="change-lang">
        <div className="lang-icon" onClick={pageLang}>
          <Translate />
        </div>
        <div className={activeLang} ref={langs}>
          <div className="lang-item" onClick={() => pageChangeLang("en")}>
            <div className="lang-flag">
              <img src="https://static10.tgstat.ru/channels/_0/87/87209f5fafe72b6248c2c912a53a1685.jpg" alt="en flag" />
            </div>
            <span>English</span>
          </div>
          <div className="lang-item" onClick={() => pageChangeLang("uz")}>
            <div className="lang-flag">
              <img src="https://cdn4.iconfinder.com/data/icons/world-flags-circular/1000/Flag_of_Uzbekistan_-_Circle-512.png" alt="uz flag" />
            </div>
            <span>O'zbek</span>
          </div>
          <div className="lang-item kaa" onClick={() => pageChangeLang("kaa")}>
            <div className="lang-flag">
              <img src="https://ca-most.ru/images/kk.png" alt="uz flag" />
            </div>
            <span>Qaraqalpaq</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar