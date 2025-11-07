import React, { useEffect } from 'react'
import './index.css'
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Header from './components/Header'
import Footer from './components/Footer'
import ChatBot from './components/ChatBot'
import ProtectedRoute from './components/ProtectedRoute'
import { initializeBucket } from './services/storageService'
import { supabase } from './services/supabaseClient'

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
import SignUp from './pages/SignUp'

function AppContent() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    initializeBucket();
  }, []);

  // Rediriger vers /signup si l'utilisateur arrive sur / avec un token d'invitation
  useEffect(() => {
    // Vérifier s'il y a un hash (token) au départ
    const hasInvitationToken = window.location.hash && !window.location.hash.includes('error')

    if (location.pathname === '/' && hasInvitationToken) {
      // S'abonner aux changements d'authentification
      let subscription = null
      const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
        if (session?.user && event === 'SIGNED_IN') {
          // Utilisateur vient d'être authentifié via le token d'invitation
          navigate('/signup')
        }
      })

      subscription = data?.subscription

      return () => {
        if (subscription) {
          subscription.unsubscribe()
        }
      }
    }
  }, [location, navigate])

  const pathname = window.location.pathname;
  const isAdminPage = pathname.includes('/admin');

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
        <Route path="/signup" element={<SignUp />} />
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
