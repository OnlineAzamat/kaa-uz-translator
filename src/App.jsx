import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import Home from "./components/Home";
import Transliteration from "./components/Transliteration"
import About from "./components/About";

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transliteration" element={<Transliteration />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
