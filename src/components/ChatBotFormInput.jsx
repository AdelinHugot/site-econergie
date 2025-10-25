import React, { useState } from 'react'
import { validateUserData } from '../services/chatbotService'

/**
 * Composant pour collecter les données utilisateur dans le chatbot
 */
function ChatBotFormInput({ formFields, onSubmit, isLoading }) {
  const [formData, setFormData] = useState({})
  const [errors, setErrors] = useState({})

  const handleInputChange = (fieldName, value) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }))
    // Effacer l'erreur pour ce champ quand l'utilisateur tape
    if (errors[fieldName]) {
      setErrors(prev => ({
        ...prev,
        [fieldName]: ''
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Valider les données
    const validation = validateUserData(formData)
    if (!validation.isValid) {
      const newErrors = {}
      validation.errors.forEach(error => {
        // Mapper les erreurs aux champs
        if (error.includes('Email')) newErrors.email = error
        if (error.includes('Téléphone')) newErrors.phone = error
        if (error.includes('nom')) newErrors.name = error
      })
      setErrors(newErrors)
      return
    }

    // Soumettre les données
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="chatbot-form">
      {formFields.map((field) => (
        <div key={field.name} className="form-group">
          <label htmlFor={field.name} className="form-label">
            {field.label}
            {field.required && <span className="required">*</span>}
          </label>

          {field.type === 'textarea' ? (
            <textarea
              id={field.name}
              name={field.name}
              placeholder={field.placeholder || ''}
              value={formData[field.name] || ''}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              required={field.required}
              disabled={isLoading}
              className={`form-input form-textarea ${errors[field.name] ? 'error' : ''}`}
              rows={field.rows || 3}
            />
          ) : field.type === 'select' ? (
            <select
              id={field.name}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              required={field.required}
              disabled={isLoading}
              className={`form-input form-select ${errors[field.name] ? 'error' : ''}`}
            >
              <option value="">Sélectionnez une option</option>
              {field.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={field.name}
              type={field.type || 'text'}
              name={field.name}
              placeholder={field.placeholder || ''}
              value={formData[field.name] || ''}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              required={field.required}
              disabled={isLoading}
              className={`form-input ${errors[field.name] ? 'error' : ''}`}
            />
          )}

          {errors[field.name] && (
            <span className="form-error">{errors[field.name]}</span>
          )}
        </div>
      ))}

      <button
        type="submit"
        disabled={isLoading}
        className="form-submit-btn"
      >
        {isLoading ? 'Envoi...' : 'Envoyer'}
      </button>
    </form>
  )
}

export default ChatBotFormInput
