import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ChatBot from './components/ChatBot'

// Pages
import Home from './pages/Home'
import Poeles from './pages/Poeles'
import Cheminees from './pages/Cheminees'
import ServicesPage from './pages/ServicesPage'
import APropos from './pages/APropos'
import Actualites from './pages/Actualites'
import Catalogues from './pages/Catalogues'
import Contact from './pages/Contact'
import TimelineShowcase from './pages/TimelineShowcase'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/poeles" element={<Poeles />} />
        <Route path="/cheminees" element={<Cheminees />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/apropos" element={<APropos />} />
        <Route path="/actualites" element={<Actualites />} />
        <Route path="/catalogues" element={<Catalogues />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/timeline-showcase" element={<TimelineShowcase />} />
      </Routes>
      <Footer />
      <ChatBot />
    </Router>
  )
}

export default App
