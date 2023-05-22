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
          <a href="#" className="navbar-item">
            <li>
              Language
            </li>
          </a>
        </ul>

        <div className="change-lang">
          <div className="lang-icon">
            <Translate />
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