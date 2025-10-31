import React, { useState, useRef, useEffect } from 'react'
import '../styles/ChatBot.css'
import '../styles/ChatBotForm.css'
import ChatBotFormInput from './ChatBotFormInput'
import { sendMessageWithRetry, formatUserData } from '../services/chatbotService'

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: 'Bonjour ! 👋 Bienvenue chez Econergie. Comment puis-je vous aider aujourd\'hui ?',
      buttons: [
        { id: 'btn-1', label: 'Je cherche un poêle', value: 'poele' },
        { id: 'btn-2', label: 'Je veux une cheminée', value: 'cheminee' },
        { id: 'btn-3', label: 'Installation et services', value: 'services' },
        { id: 'btn-4', label: 'Avoir un devis', value: 'devis' }
      ]
    }
  ])
  const [showNotification, setShowNotification] = useState(false)
  const [notification, setNotification] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [userData, setUserData] = useState({})
  const [error, setError] = useState(null)
  const messagesEndRef = useRef(null)

  // Liste de tips et fun facts
  const tips = [
    'Saviez-vous ? Un poêle à bois bien entretenu peut réduire votre facture de chauffage de 35 à 45 % ! 🔥',
    'Conseil : Utilisez du bois sec (humidité < 20%) pour optimiser le rendement de votre poêle.',
    'Fun fact : Une cheminée de qualité peut chauffer une surface jusqu\'à 220 m² ! 🏠',
    'Astuce : L\'entretien annuel obligatoire garantit une performance optimale et une sécurité maximale.',
    'Bon à savoir : Nos poêles granulés offrent un rendement jusqu\'à 92 % ! 🎯',
    'Conseil : Une maison bien isolée + un bon poêle = confort sans limite et économies assurées.',
    'Did you know ? Les foyers fermés transforment votre cheminée en véritable source de chauffage performant.',
    'Astuce : Le Pellet Drive 24/7 vous permet d\'accéder à vos granulés quand vous en avez besoin ! ⏰',
    'Fun fact : Un poêle mixte (bois + granulés) vous offre une flexibilité totale. Génial non ? 🔄',
    'Conseil : Consultez nos experts gratuitement pour trouver LA solution parfaite pour votre maison.'
  ]

  // Afficher une notification après 5 secondes (mais pas si le chatbot est ouvert)
  useEffect(() => {
    // Ne pas afficher la notification si le chatbot est déjà ouvert
    if (isOpen) return

    const timer = setTimeout(() => {
      const randomTip = tips[Math.floor(Math.random() * tips.length)]
      setNotification(randomTip)
      setShowNotification(true)

      // Masquer la notification après 10 secondes
      const hideTimer = setTimeout(() => {
        setShowNotification(false)
      }, 10000)

      return () => clearTimeout(hideTimer)
    }, 5000)

    return () => clearTimeout(timer)
  }, [isOpen])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleButtonClick = (buttonValue, buttonLabel) => {
    // Ajouter le message de l'utilisateur
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: buttonLabel
    }

    setMessages(prev => [...prev, userMessage])
    setError(null)

    // Envoyer à N8N
    sendMessageToBot(buttonLabel)
  }

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: inputValue
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setError(null)

    // Envoyer à N8N
    sendMessageToBot(inputValue)
  }

  const handleFormSubmit = (formData) => {
    // Sauvegarder les données utilisateur
    const updatedUserData = formatUserData({ ...userData, ...formData })
    setUserData(updatedUserData)

    // Créer un message de confirmation
    const confirmationMessage = {
      id: messages.length + 1,
      type: 'user',
      text: Object.entries(formData)
        .map(([key, value]) => `${key}: ${value}`)
        .join(', ')
    }

    setMessages(prev => [...prev, confirmationMessage])
    setError(null)

    // Envoyer à N8N avec les données de formulaire
    sendMessageToBot('', updatedUserData)
  }

  const sendMessageToBot = async (message, customUserData = null) => {
    setIsLoading(true)

    try {
      const response = await sendMessageWithRetry(
        message,
        customUserData || userData,
        messages
      )

      // DEBUG: Log la réponse brute de N8N
      console.log('✅ Réponse N8N reçue:', response)

      // Créer le message du bot
      const botMessage = {
        id: messages.length + 2,
        type: 'bot',
        text: response.text || 'Pas de réponse',
        buttons: response.buttons || [],
        formFields: response.formFields || [],
        messageType: response.type
      }

      console.log('📝 Message du bot:', botMessage)

      setMessages(prev => [...prev, botMessage])
      setError(null)
    } catch (err) {
      console.error('❌ Erreur complète:', err)
      console.error('Message:', err.message)
      console.error('Stack:', err.stack)
      setError(err.message)

      // Afficher un message d'erreur
      const errorMessage = {
        id: messages.length + 2,
        type: 'bot',
        text: `Désolé, une erreur est survenue: ${err.message}. Veuillez réessayer.`,
        buttons: [
          { id: 'btn-retry', label: 'Réessayer', value: 'retry' }
        ]
      }

      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="chatbot-container">
      {/* Notification de tip */}
      {showNotification && (
        <div
          className="chatbot-notification"
          style={{
            position: 'fixed',
            bottom: '120px',
            right: '20px',
            background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
            color: 'white',
            padding: '1rem 1.5rem',
            borderRadius: '12px',
            maxWidth: '300px',
            boxShadow: '0 10px 30px rgba(232, 76, 31, 0.4)',
            fontSize: '0.9rem',
            lineHeight: 1.5,
            animation: 'slideUp 0.3s ease forwards',
            zIndex: 999,
            cursor: 'pointer'
          }}
          onClick={() => setShowNotification(false)}
        >
          {notification}
        </div>
      )}

      {/* Bouton flottant */}
      <button
        className={`chatbot-trigger ${isOpen ? 'hidden' : ''}`}
        onClick={() => {
          setIsOpen(true)
          setShowNotification(false)
        }}
        aria-label="Ouvrir le chatbot"
      >
        <span className="chatbot-icon">💬</span>
      </button>

      {/* Fenêtre du chat */}
      {isOpen && (
        <div className="chatbot-window">
          {/* En-tête */}
          <div className="chatbot-header">
            <div className="chatbot-header-content">
              <h3>Econergie Assistant</h3>
              <span className="chatbot-status">En ligne</span>
            </div>
            <button
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label="Fermer le chatbot"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div
                key={message.id}
                className={`chatbot-message ${message.type}`}
              >
                {message.type === 'bot' && (
                  <div className="chatbot-avatar">
                    <span>🔥</span>
                  </div>
                )}
                <div className={`message-content ${message.type}`}>
                  <p className="message-text">{message.text}</p>

                  {/* Formulaire */}
                  {message.formFields && message.formFields.length > 0 && (
                    <ChatBotFormInput
                      formFields={message.formFields}
                      onSubmit={handleFormSubmit}
                      isLoading={isLoading}
                    />
                  )}

                  {/* Boutons rapides */}
                  {message.buttons && message.buttons.length > 0 && (
                    <div className="message-buttons">
                      {message.buttons.map((button) => (
                        <button
                          key={button.id}
                          className="quick-reply-btn"
                          onClick={() => handleButtonClick(button.value, button.label)}
                          disabled={isLoading}
                        >
                          {button.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="chatbot-message bot">
                <div className="chatbot-avatar">
                  <span>🔥</span>
                </div>
                <div className="message-content bot">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="chatbot-input-area">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Écrivez votre message..."
              className="chatbot-input"
              disabled={isLoading}
            />
            <button
              className="chatbot-send-btn"
              onClick={handleSendMessage}
              disabled={isLoading || inputValue.trim() === ''}
              aria-label="Envoyer le message"
            >
              ➜
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChatBot
