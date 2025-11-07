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
    const checkInvitationToken = async () => {
      // Vérifier si on est sur la page d'accueil
      if (location.pathname === '/') {
        // Attendre un peu pour que Supabase traite le token
        setTimeout(async () => {
          try {
            const { data: { user } } = await supabase.auth.getUser()
            // Si un utilisateur est authentifié et qu'il est sur /, on le redirige vers /signup
            if (user && !user.user_metadata?.confirmed_at) {
              navigate('/signup')
            }
          } catch (err) {
            console.error('Erreur lors de la vérification du token:', err)
          }
        }, 500)
      }
    }

    checkInvitationToken()
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
