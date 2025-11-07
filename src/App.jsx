import React, { useEffect } from 'react'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Header from './components/Header'
import Footer from './components/Footer'
import ChatBot from './components/ChatBot'
import ProtectedRoute from './components/ProtectedRoute'
import { initializeBucket } from './services/storageService'

// Pages
import Home from './pages/Home'
import Poeles from './pages/Poeles'
import Cheminees from './pages/Cheminees'
import ServicesPage from './pages/ServicesPage'
import APropos from './pages/APropos'
import Actualites from './pages/Actualites'
import ArticleDetail from './pages/ArticleDetail'
import Catalogues from './pages/Catalogues'
import Contact from './pages/Contact'
import TimelineShowcase from './pages/TimelineShowcase'

// Admin Pages
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'

function AppContent() {
  useEffect(() => {
    initializeBucket();
  }, []);

  const location = window.location.pathname;
  const isAdminPage = location.includes('/admin');

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/poeles" element={<Poeles />} />
        <Route path="/cheminees" element={<Cheminees />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/apropos" element={<APropos />} />
        <Route path="/actualites" element={<Actualites />} />
        <Route path="/actualites/:slug" element={<ArticleDetail />} />
        <Route path="/catalogues" element={<Catalogues />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/timeline-showcase" element={<TimelineShowcase />} />

        {/* Admin Routes */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      {!isAdminPage && <Footer />}
      {!isAdminPage && <ChatBot />}
    </>
  )
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  )
}

export default App
