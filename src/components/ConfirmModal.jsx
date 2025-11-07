import React from 'react';
import { AlertTriangle, X } from 'lucide-react';

export default function ConfirmModal({
  title = 'Confirmer',
  message = 'Êtes-vous sûr ?',
  confirmText = 'Confirmer',
  cancelText = 'Annuler',
  isDangerous = false,
  isLoading = false,
  onConfirm,
  onCancel
}) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full animate-in fade-in scale-100 duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            {isDangerous && (
              <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0" />
            )}
            <h3 className="text-lg font-semibold text-gray-900">
              {title}
            </h3>
          </div>
          <button
            onClick={onCancel}
            disabled={isLoading}
            className="text-gray-400 hover:text-gray-600 transition disabled:opacity-50"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <p className="text-gray-600 text-sm">
            {message}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center gap-3 p-6 border-t border-gray-100 bg-gray-50 rounded-b-lg">
          <button
            onClick={onCancel}
            disabled={isLoading}
            className={`
              px-4 py-2 rounded-lg font-medium text-sm
              border border-gray-300 text-gray-700
              hover:bg-gray-50 transition
              disabled:opacity-50 disabled:cursor-not-allowed
            `}
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            disabled={isLoading}
            className={`
              px-4 py-2 rounded-lg font-medium text-sm
              text-white transition
              disabled:opacity-50 disabled:cursor-not-allowed
              ${isDangerous
                ? 'bg-red-600 hover:bg-red-700'
                : 'bg-[#FF6B00] hover:bg-[#E55A00]'
              }
            `}
          >
            {isLoading ? 'Traitement...' : confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
