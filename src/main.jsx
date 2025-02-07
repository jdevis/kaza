import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.scss'
import Home from './pages/Home/index.jsx'
import About from './pages/About/index.jsx'
import Lodging from './pages/Lodging/index.jsx'
import Error from './pages/Error/index.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/lodging/:id" element={<Lodging />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </StrictMode>
)