import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './assets/styles/index.scss'
import Header from './components/Header/index.jsx'
import Footer from './components/Footer/index.jsx'
import Home from './pages/Home/index.jsx'
import About from './pages/About/index.jsx'
import Lodging from './pages/Lodging/index.jsx'
import Error from './pages/Error/index.jsx'

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/lodging/:id" element={<Lodging />} />
				<Route path="*" element={<Error />} />
			</Routes>
			<Footer />
		</Router>
	</StrictMode>
)