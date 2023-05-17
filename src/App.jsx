import { BrowserRouter, Route, Routes } from "react-router-dom"
import KaaUzTrans from "./components/kaaUzTrans"
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<KaaUzTrans />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
