import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../services/supabaseClient'
import '../styles/SignUp.css'

function SignUp() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [showPassword, setShowPassword] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState(0)
  const [success, setSuccess] = useState(false)

  // Récupérer l'email depuis la session Supabase authentifiée
  useEffect(() => {
    const getAuthenticatedUser = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser()
        if (user?.email) {
          setEmail(user.email)
        } else {
          // Si pas d'utilisateur authentifié, rediriger vers login
          setError('Session expirée ou invalide. Veuillez cliquer à nouveau sur le lien d\'invitation.')
          setTimeout(() => {
            navigate('/admin-login')
          }, 3000)
        }
      } catch (err) {
        console.error('Erreur lors de la récupération de l\'utilisateur:', err)
        setError('Erreur de session. Veuillez réessayer.')
      }
    }

    getAuthenticatedUser()
  }, [navigate])

  // Vérifier la force du mot de passe
  const checkPasswordStrength = (pwd) => {
    let strength = 0
    if (pwd.length >= 8) strength++
    if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) strength++
    if (/[0-9]/.test(pwd)) strength++
    if (/[^a-zA-Z0-9]/.test(pwd)) strength++
    return strength
  }

  const handlePasswordChange = (e) => {
    const pwd = e.target.value
    setPassword(pwd)
    setPasswordStrength(checkPasswordStrength(pwd))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    // Validations
    if (!email || !password || !passwordConfirm) {
      setError('Tous les champs sont obligatoires')
      return
    }

    if (password !== passwordConfirm) {
      setError('Les mots de passe ne correspondent pas')
      return
    }

    if (password.length < 8) {
      setError('Le mot de passe doit contenir au moins 8 caractères')
      return
    }

    if (passwordStrength < 2) {
      setError('Le mot de passe doit être plus complexe')
      return
    }

    setLoading(true)

    try {
      // Récupérer le token d'invitation de l'URL
      const hash = window.location.hash

      // Utiliser setUserPassword pour confirmer l'invitation et définir le mot de passe
      const { error: updateError } = await supabase.auth.updateUser({
        password: password
      })

      if (updateError) throw updateError

      // Rediriger vers le login après succès
      setTimeout(() => {
        navigate('/admin-login', {
          state: { message: 'Compte créé avec succès! Veuillez vous connecter.' }
        })
      }, 1500)
    } catch (err) {
      console.error('Erreur:', err)
      setError(err.message || 'Une erreur est survenue lors de la création du compte')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="signup-success">
        <div className="success-content">
          <img src="/Econergie_Logo.webp" alt="Econergie" className="success-logo" />
          <span className="success-icon">✓</span>
          <h1>Compte créé avec succès!</h1>
          <p>Vous allez être redirigé vers la page de connexion...</p>
          <div className="success-loader"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="signup-page">
      {/* Main Container */}
      <div className="signup-main">
        {/* Left Side - Branding */}
        <div className="signup-branding">
          <div className="branding-content">
            <div className="logo-container">
              <img src="/Econergie_Logo.webp" alt="Econergie" className="branding-logo" />
            </div>
            <p className="welcome-text">Bienvenue dans votre</p>
            <p className="admin-text">Espace Administrateur</p>
            <div className="branding-features">
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span>Gestion complète</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span>Sécurisé et fiable</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span>Support prioritaire</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="signup-form-wrapper">
          <div className="form-container">
            <h2>Créer votre compte</h2>
            <p className="form-subtitle">Complétez votre profil administrateur</p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="signup-form">
          {/* Email Field (Read-only) */}
          <div className="form-group">
            <label htmlFor="email">Adresse Email</label>
            <div className="email-field-wrapper">
              <input
                type="email"
                id="email"
                value={email}
                readOnly
                className="form-input email-readonly"
              />
              <span className="email-badge">✓ Pré-rempli</span>
            </div>
            <small className="form-help">Cet email a été défini par l'administrateur</small>
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <div className="password-field-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Minimum 8 caractères"
                className="form-input"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>

            {/* Password Strength Indicator */}
            {password && (
              <div className="password-strength">
                <div className="strength-bar">
                  <div
                    className={`strength-fill strength-${passwordStrength}`}
                    style={{ width: `${(passwordStrength / 4) * 100}%` }}
                  ></div>
                </div>
                <span className="strength-text">
                  {passwordStrength === 0 && 'Très faible'}
                  {passwordStrength === 1 && 'Faible'}
                  {passwordStrength === 2 && 'Moyen'}
                  {passwordStrength === 3 && 'Bon'}
                  {passwordStrength === 4 && 'Excellent'}
                </span>
              </div>
            )}

            <small className="form-help">
              Minimum 8 caractères avec majuscules, minuscules, chiffres et symboles
            </small>
          </div>

          {/* Confirm Password Field */}
          <div className="form-group">
            <label htmlFor="passwordConfirm">Confirmer le mot de passe</label>
            <div className="password-field-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="passwordConfirm"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                placeholder="Confirmez votre mot de passe"
                className={`form-input ${passwordConfirm && password === passwordConfirm ? 'input-success' : ''} ${passwordConfirm && password !== passwordConfirm ? 'input-error' : ''}`}
              />
              {passwordConfirm && password === passwordConfirm && (
                <span className="confirmation-badge">✓</span>
              )}
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="error-message">
              <span className="error-icon">⚠️</span>
              <span>{error}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="submit-button"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner"></span>
                Création en cours...
              </>
            ) : (
              'Créer mon compte'
            )}
          </button>

          {/* Security Info */}
          <div className="security-info">
            <span className="info-icon">🔒</span>
            <span>Vos données sont chiffrées et sécurisées</span>
          </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
