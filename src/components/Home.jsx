import { Box, List, ListItem } from "@mui/material";
import Textarea from "./Textarea";
import SelectLang from "./SelectLang";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box>
      <List component="nav" sx={{ display: "flex", flexWrap: { lg: "nowrap", md: "wrap" } }}>
        <ListItem button sx={{ width: { xs: "auto", md: "100%"} }}>
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem button sx={{ width: { xs: "auto", md: "100%"} }}>
          <Link to="/transliteration">Transliteration</Link>
        </ListItem>
        <ListItem button sx={{ width: { xs: "auto", md: "100%"} }}>
          <Link to="/about-us">About Us</Link>
        </ListItem>
      </List>

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