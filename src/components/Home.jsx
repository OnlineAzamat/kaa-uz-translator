/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Box } from "@mui/material";
import { Translate } from "@mui/icons-material";

import Textarea from "./Textarea";
import SelectLang from "./SelectLang";

const Home = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ padding: { xs: "10px" } }}>
      <div className="navbar-container">
        <ul className="navbar-items">
          <div className="menu">
            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <Link to="/" className="navbar-item active">
            <li>
              {t('home')}
            </li>
          </Link>
          <Link to="/transliteration" className="navbar-item">
            <li>
              {t('transliteration')}
            </li>
          </Link>
          <Link to="/v" className="navbar-item">
            <li>
              {t('version')}
            </li>
          </Link>
        </ul>

        <div className="change-lang">
          <div className="lang-icon">
            <Translate />
          </div>
          <div className="langs">
            <div className="lang-item">
              <div className="lang-flag">
                <img src="https://static10.tgstat.ru/channels/_0/87/87209f5fafe72b6248c2c912a53a1685.jpg" alt="en flag" />
              </div>
              <span>English</span>
            </div>
            <div className="lang-item">
              <div className="lang-flag">
                <img src="https://cdn4.iconfinder.com/data/icons/world-flags-circular/1000/Flag_of_Uzbekistan_-_Circle-512.png" alt="uz flag" />
              </div>
              <span>O'zbek</span>
            </div>
            <div className="lang-item kaa">
              <div className="lang-flag">
                <img src="https://ca-most.ru/images/kk.png" alt="uz flag" />
              </div>
              <span>Qaraqalpaq</span>
            </div>
          </div>
        </div>
      </div>

      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'start',
        padding: { lg: '1vw', sm: '10px' }
      }}>
        <Box>
          <SelectLang />
        </Box>
        <Textarea />
      </Box>
    </Box>
  )
}

export default Home