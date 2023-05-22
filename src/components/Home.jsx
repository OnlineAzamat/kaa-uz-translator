import { Box } from "@mui/material";
import Textarea from "./Textarea";
import SelectLang from "./SelectLang";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ padding: { xs: "10px" } }}>
      <ul className="navbar-container">
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