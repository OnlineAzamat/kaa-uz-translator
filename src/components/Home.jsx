import { Box } from "@mui/material";
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
          </div>
          <SelectLang />
        </Box>
        <Textarea />
      </Box>
    </Box>
  )
}

export default Home