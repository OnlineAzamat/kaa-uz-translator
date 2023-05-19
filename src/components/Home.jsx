import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Textarea from "./Textarea";
import SelectLang from "./SelectLang";

const Home = () => {
  return (
    <Box>
      <header>
        Translate
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
            <Button variant="outlined" sx={{ textTransform: 'capitalize' }} disabled>
              <Link to="/">
                Language
              </Link>
            </Button>
            <Button variant="outlined" sx={{ textTransform: 'capitalize', ml: '10px' }}>Cryllic to latin</Button>
            <Button variant="outlined" sx={{ textTransform: 'capitalize', ml: '10px' }}>Latin to cryllic</Button>
          </div>
          <SelectLang />
        </Box>
        <Textarea />
      </Box>
    </Box>
  )
}

export default Home