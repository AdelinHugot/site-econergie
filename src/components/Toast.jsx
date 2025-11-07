import React, { useEffect } from 'react';
import { Check, AlertCircle, X } from 'lucide-react';

export default function Toast({
  message,
  type = 'success', // success, error, info
  duration = 3000,
  onClose
}) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const styles = {
    success: {
      bg: 'bg-green-50 border-green-200',
      text: 'text-green-800',
      icon: 'text-green-600'
    },
    error: {
      bg: 'bg-red-50 border-red-200',
      text: 'text-red-800',
      icon: 'text-red-600'
    },
    info: {
      bg: 'bg-blue-50 border-blue-200',
      text: 'text-blue-800',
      icon: 'text-blue-600'
    }
  };

  const style = styles[type] || styles.info;

  const IconComponent =
    type === 'success' ? Check :
    type === 'error' ? AlertCircle :
    AlertCircle;

  return (
    <div
      className={`
        fixed bottom-6 right-6 max-w-sm
        flex items-center gap-3
        px-4 py-3 rounded-lg border
        ${style.bg}
        animate-in fade-in slide-in-from-bottom-4 duration-300
        shadow-lg
        z-50
      `}
    >
      <IconComponent className={`w-5 h-5 flex-shrink-0 ${style.icon}`} />
      <p className={`text-sm font-medium ${style.text}`}>
        {message}
      </p>
      <button
        onClick={onClose}
        className={`ml-auto flex-shrink-0 ${style.icon} hover:opacity-70 transition`}
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
