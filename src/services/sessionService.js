/**
 * Session Management Service for Chatbot
 * Handles unique session tracking and user data persistence during a session
 */

const SESSION_KEY = 'chatbot_session'
const USER_DATA_KEY = 'chatbot_user_data'
const SESSION_INITIALIZED_KEY = 'chatbot_session_initialized'

/**
 * Generate a unique session ID
 * Format: timestamp + random string for uniqueness
 */
const generateSessionId = () => {
  const timestamp = Date.now()
  const randomString = Math.random().toString(36).substring(2, 15)
  return `session_${timestamp}_${randomString}`
}

/**
 * Initialize session if it doesn't exist
 * Creates a new session ID and stores it in sessionStorage
 */
export const initializeSession = () => {
  // Check if session already exists in this browser tab
  let sessionId = sessionStorage.getItem(SESSION_KEY)

  if (!sessionId) {
    sessionId = generateSessionId()
    sessionStorage.setItem(SESSION_KEY, sessionId)
  }

  return sessionId
}

/**
 * Get current session ID
 */
export const getSessionId = () => {
  let sessionId = sessionStorage.getItem(SESSION_KEY)

  if (!sessionId) {
    sessionId = initializeSession()
  }

  return sessionId
}

/**
 * Store user data in session storage
 * Called once when user submits form with their info
 */
export const storeUserData = (userData) => {
  sessionStorage.setItem(USER_DATA_KEY, JSON.stringify(userData))
}

/**
 * Retrieve user data from session storage
 */
export const getUserData = () => {
  const userData = sessionStorage.getItem(USER_DATA_KEY)
  return userData ? JSON.parse(userData) : null
}

/**
 * Check if user data has already been collected in this session
 */
export const isUserDataCollected = () => {
  return sessionStorage.getItem(USER_DATA_KEY) !== null
}

/**
 * Mark the initial data exchange as complete
 * This helps N8N know when to request user data vs when data already exists
 */
export const markSessionInitialized = () => {
  sessionStorage.setItem(SESSION_INITIALIZED_KEY, 'true')
}

/**
 * Check if session has been initialized (user data already sent)
 */
export const isSessionInitialized = () => {
  return sessionStorage.getItem(SESSION_INITIALIZED_KEY) === 'true'
}

/**
 * Clear session data (useful for logout or when user wants to reset)
 */
export const clearSession = () => {
  sessionStorage.removeItem(SESSION_KEY)
  sessionStorage.removeItem(USER_DATA_KEY)
  sessionStorage.removeItem(SESSION_INITIALIZED_KEY)
}

/**
 * Get complete session context to send to N8N
 * This is what gets sent with every message to N8N
 */
export const getSessionContext = () => {
  return {
    sessionId: getSessionId(),
    userData: getUserData(),
    isInitialized: isSessionInitialized(),
    timestamp: new Date().toISOString()
  }
}
