import './App.css'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Log from './pages/Log/Log';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/log" element={<Log />} />
      </Routes>
    </Router>
  )
}

export default App
