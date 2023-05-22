import { Box, List, ListItem } from "@mui/material";
import Textarea from "./Textarea";
import SelectLang from "./SelectLang";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box sx={{ padding: { xs: "10px" } }}>
      <List component="nav" sx={{ display: "flex", flexWrap: { md: "nowrap", xs: "wrap", sm: "nowrap" }, fontSize: { xs: "0.9rem" } }}>
        <ListItem button sx={{ width: { md: "auto", xs: "100%", sm: "100%" }, padding: { xs: "3px 5px", sm: "8px 16px" } }}>
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem button sx={{ width: { md: "auto", xs: "100%", sm: "100%" }, padding: { xs: "3px 5px", sm: "8px 16px" } }}>
          <Link to="/transliteration">Transliteration</Link>
        </ListItem>
        <ListItem button sx={{ width: { md: "auto", xs: "100%", sm: "100%" }, padding: { xs: "3px 5px", sm: "8px 16px" } }}>
          <Link to="/about-us">About Us</Link>
        </ListItem>
      </List>

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