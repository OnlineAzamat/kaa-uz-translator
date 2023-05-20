import { Box } from "@mui/material";
import Textarea from "./Textarea";
import SelectLang from "./SelectLang";

const Home = () => {
  return (
    <Box>
      <header>
        <nav className="uk-navbar-container">
          <div className="uk-container">
              <div>
                  <div className="uk-navbar-left">

                      <ul className="uk-navbar-nav">
                          <li className="uk-active"><a href="#">Home</a></li>
                          <li>
                              <a href="#">Cyrllic to latin</a>
                          </li>
                          <li><a href="#">About us</a></li>
                      </ul>
                  </div>
              </div>
          </div>
      </nav>
      </header>

      <Box sx={{
        height: 'calc(100vh - 68px)',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'start',
        padding: { lg: '1vw', sm: '10px' }
      }}>
        <Box>
          <div className="control">
          </div>
          <SelectLang />
        </Box>
        <Textarea />
      </Box>
    </Box>
  )
}

export default Home