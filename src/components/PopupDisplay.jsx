import React, { useState, useEffect } from 'react';
import { supabase } from '../services/supabaseClient';
import '../styles/PopupDisplay.css';

export default function PopupDisplay({ pageSlug = 'home' }) {
  const [popups, setPopups] = useState([]);
  const [visiblePopups, setVisiblePopups] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPopups();
  }, [pageSlug]);

  const fetchPopups = async () => {
    try {
      const { data, error } = await supabase
        .from('popups')
        .select('*')
        .eq('page_slug', pageSlug)
        .eq('active', true)
        .order('created_at', { ascending: false });

      if (error) throw error;

      setPopups(data || []);

      // Initialiser les timers pour afficher les pop-ups
      data?.forEach((popup) => {
        const delay = popup.delay_ms || 0;
        const timer = setTimeout(() => {
          setVisiblePopups((prev) => ({
            ...prev,
            [popup.id]: true,
          }));
        }, delay);

        // Cleanup timer
        return () => clearTimeout(timer);
      });
    } catch (error) {
      console.error('Erreur lors du chargement des pop-ups:', error);
    } finally {
      setLoading(false);
    }
  };

  const closePopup = (popupId) => {
    setVisiblePopups((prev) => ({
      ...prev,
      [popupId]: false,
    }));
  };

  const handleOverlayClick = (e, popupId) => {
    // Fermer le pop-up si on clique en dehors du contenu
    if (e.target === e.currentTarget) {
      closePopup(popupId);
    }
  };

  return (
    <>
      {popups.map((popup) => (
        visiblePopups[popup.id] && (
          <div
            key={popup.id}
            className="popup-overlay"
            onClick={(e) => handleOverlayClick(e, popup.id)}
          >
            <div className="popup-content">
              <button
                className="popup-close-btn"
                onClick={() => closePopup(popup.id)}
                aria-label="Fermer le pop-up"
              >
                ✕
              </button>

              {popup.image_url && (
                <img
                  src={popup.image_url}
                  alt={popup.title || 'Pop-up'}
                  className="popup-image"
                />
              )}

              <div className="popup-body">
                {popup.title && <h2 className="popup-title">{popup.title}</h2>}

                {popup.link_url && popup.link_text && (
                  <a href={popup.link_url} className="popup-link" target="_blank" rel="noopener noreferrer">
                    {popup.link_text}
                  </a>
                )}
              </div>
            </div>
          </div>
        )
      ))}
    </>
  );
}
