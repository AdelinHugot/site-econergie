/**
 * Service pour la communication avec N8N
 * Gère l'envoi des messages et la réception des réponses du bot IA
 */

// Configuration depuis les variables d'environnement
const N8N_WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL
const API_TIMEOUT = parseInt(import.meta.env.VITE_N8N_TIMEOUT || '30000')
const RETRY_ATTEMPTS = parseInt(import.meta.env.VITE_N8N_RETRY_ATTEMPTS || '3')
const RETRY_DELAY = parseInt(import.meta.env.VITE_N8N_RETRY_DELAY || '1000')

// Vérifier que l'URL N8N est configurée
if (!N8N_WEBHOOK_URL) {
  console.warn(
    'ATTENTION: VITE_N8N_WEBHOOK_URL n\'est pas configurée. ' +
    'Le chatbot ne pourra pas communiquer avec N8N. ' +
    'Veuillez configurer l\'URL dans votre fichier .env.local'
  )
}

/**
 * Envoie un message à N8N et récupère la réponse du bot IA
 * @param {string} userMessage - Le message de l'utilisateur
 * @param {object} userData - Les données utilisateur collectées {email, phone, name, etc}
 * @param {array} conversationHistory - L'historique de la conversation
 * @param {object} sessionContext - Contexte de session {sessionId, isInitialized}
 * @returns {Promise<object>} La réponse du bot avec texte et boutons
 */
export const sendMessageToN8N = async (userMessage, userData = {}, conversationHistory = [], sessionContext = {}) => {
  const payload = {
    message: userMessage,
    userData: userData,
    conversationHistory: conversationHistory,
    timestamp: new Date().toISOString(),
    session: {
      id: sessionContext.sessionId || null,
      isInitialized: sessionContext.isInitialized || false
    }
  }

  try {
    const response = await fetchWithTimeout(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    }, API_TIMEOUT)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return parseN8NResponse(data)
  } catch (error) {
    console.error('Erreur lors de la communication avec N8N:', error)
    throw error
  }
}

/**
 * Envoie un message avec retry automatique
 * @param {string} userMessage - Le message de l'utilisateur
 * @param {object} userData - Les données utilisateur
 * @param {array} conversationHistory - L'historique
 * @param {object} sessionContext - Contexte de session
 * @param {number} attempt - Le numéro de tentative actuelle
 * @returns {Promise<object>} La réponse du bot
 */
export const sendMessageWithRetry = async (
  userMessage,
  userData = {},
  conversationHistory = [],
  sessionContext = {},
  attempt = 1
) => {
  try {
    return await sendMessageToN8N(userMessage, userData, conversationHistory, sessionContext)
  } catch (error) {
    if (attempt < RETRY_ATTEMPTS) {
      console.warn(`Tentative ${attempt} échouée, nouvelle tentative...`)
      await new Promise(resolve => setTimeout(resolve, RETRY_DELAY * attempt))
      return sendMessageWithRetry(
        userMessage,
        userData,
        conversationHistory,
        sessionContext,
        attempt + 1
      )
    }
    throw error
  }
}

/**
 * Parse la réponse de N8N et l'adapte au format du chatbot
 * N8N AI Agent retourne le texte directement
 * @param {object} n8nResponse - La réponse brute de N8N
 * @returns {object} La réponse formatée pour le chatbot
 */
const parseN8NResponse = (n8nResponse) => {
  if (!n8nResponse) {
    throw new Error('Réponse vide de N8N')
  }

  // N8N AI Agent retourne généralement:
  // - text: string (réponse du bot)
  // - ou output: string (parfois utilisé par les agents)
  // - ou action_input: string (pour les agents avec outils)

  let responseText = ''

  // Chercher le texte de réponse dans différents formats possibles
  if (n8nResponse.text) {
    responseText = n8nResponse.text
  } else if (n8nResponse.output) {
    responseText = n8nResponse.output
  } else if (n8nResponse.action_input) {
    responseText = n8nResponse.action_input
  } else if (n8nResponse.message) {
    responseText = n8nResponse.message
  } else if (typeof n8nResponse === 'string') {
    responseText = n8nResponse
  } else {
    // Essayer de convertir l'objet en string
    responseText = JSON.stringify(n8nResponse).substring(0, 500)
  }

  // Gestion des erreurs
  if (n8nResponse.error) {
    return {
      text: n8nResponse.error.message || 'Une erreur est survenue. Veuillez réessayer.',
      buttons: [
        { id: 'btn-retry', label: 'Réessayer', value: 'retry' },
        { id: 'btn-contact', label: 'Contacter le support', value: 'contact' }
      ],
      type: 'error'
    }
  }

  return {
    text: responseText,
    buttons: n8nResponse.buttons || [],
    type: n8nResponse.type || 'text',
    formFields: n8nResponse.formFields || [],
    data: n8nResponse.data || null
  }
}

/**
 * Fetch avec timeout
 * @param {string} url - L'URL à requêter
 * @param {object} options - Les options fetch
 * @param {number} timeout - Le timeout en ms
 * @returns {Promise<Response>} La réponse
 */
const fetchWithTimeout = (url, options, timeout) => {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Timeout de la requête')), timeout)
    )
  ])
}

/**
 * Format les données utilisateur pour l'envoi à N8N
 * @param {object} userData - Les données brutes
 * @returns {object} Les données formatées
 */
export const formatUserData = (userData) => {
  return {
    email: userData.email || null,
    phone: userData.phone || null,
    name: userData.name || null,
    company: userData.company || null,
    ...userData
  }
}

/**
 * Valide les données utilisateur
 * @param {object} userData - Les données à valider
 * @returns {object} { isValid: boolean, errors: array }
 */
export const validateUserData = (userData) => {
  const errors = []

  if (userData.email && !isValidEmail(userData.email)) {
    errors.push('Email invalide')
  }

  if (userData.phone && !isValidPhone(userData.phone)) {
    errors.push('Téléphone invalide')
  }

  if (userData.name && userData.name.trim().length < 2) {
    errors.push('Le nom doit contenir au moins 2 caractères')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

/**
 * Valide un email
 * @param {string} email - L'email à valider
 * @returns {boolean}
 */
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Valide un numéro de téléphone
 * @param {string} phone - Le téléphone à valider
 * @returns {boolean}
 */
const isValidPhone = (phone) => {
  const phoneRegex = /^[\d\s\-\+\(\)]{7,}$/
  return phoneRegex.test(phone)
}

export default {
  sendMessageToN8N,
  sendMessageWithRetry,
  formatUserData,
  validateUserData
}
