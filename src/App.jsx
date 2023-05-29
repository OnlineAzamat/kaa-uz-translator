import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import Home from "./components/Home";
import Transliterate from "./components/Transliterate"
import About from "./components/About";
import i18n from "./lang/i18";

import { Analytics } from "@vercel/analytics/react";

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transliterate" element={<Transliterate />} />
          <Route path="/about-us" element={<About />} />
          <Analytics />
        </Routes>
      </BrowserRouter>
  )
}

export default App
