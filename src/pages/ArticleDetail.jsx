import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { supabase } from '../services/supabaseClient'
import PopupDisplay from '../components/PopupDisplay'

function ArticleDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const categories = [
    { value: 'tous', label: 'Tous les articles' },
    { value: 'produit', label: 'Nouveaux Produits' },
    { value: 'promotion', label: 'Promotions' },
    { value: 'conseil', label: 'Conseils & Guides' },
    { value: 'environnement', label: 'Environnement' },
    { value: 'client', label: 'Témoignages' },
    { value: 'event', label: 'Événements' }
  ]

  useEffect(() => {
    fetchArticle()
    window.scrollTo(0, 0)
  }, [slug])

  const fetchArticle = async () => {
    try {
      const { data, error: fetchError } = await supabase
        .from('articles')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .single()

      if (fetchError) throw fetchError

      // Formater la date
      const formattedArticle = {
        ...data,
        date: new Date(data.created_at).toLocaleDateString('fr-FR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      }

      setArticle(formattedArticle)
    } catch (err) {
      console.error('Erreur lors du chargement de l\'article:', err)
      setError('Article non trouvé')
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', marginTop: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p>Chargement...</p>
      </div>
    )
  }

  if (error || !article) {
    return (
      <div style={{ minHeight: '100vh', marginTop: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <p style={{ color: '#999', marginBottom: '2rem' }}>{error || 'Article non trouvé'}</p>
        <button
          onClick={() => navigate('/actualites')}
          style={{
            background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
            color: 'white',
            border: 'none',
            padding: '0.8rem 2rem',
            borderRadius: '50px',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          Retour aux actualités
        </button>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', marginTop: '60px' }}>
      <PopupDisplay pageSlug="article-detail" />

      {/* Hero Image */}
      <div style={{ height: '400px', overflow: 'hidden', position: 'relative' }}>
        <img
          src={article.image_url || '/img/Accueil/Poe_le_a__Granule_s_Montargis__1_.webp'}
          alt={article.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Content */}
      <article style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
        {/* Breadcrumb */}
        <button
          onClick={() => navigate('/actualites')}
          style={{
            background: 'none',
            border: 'none',
            color: '#FF6B00',
            fontSize: '0.95rem',
            fontWeight: 600,
            cursor: 'pointer',
            marginBottom: '1.5rem',
            padding: 0
          }}
        >
          ← Retour aux actualités
        </button>

        {/* Meta Info */}
        <p style={{ color: '#999', fontSize: '0.9rem', marginBottom: '1rem' }}>
          {article.date}
        </p>

        {/* Category Badge */}
        <div style={{
          display: 'inline-block',
          background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '50px',
          fontSize: '0.85rem',
          fontWeight: 600,
          marginBottom: '1.5rem'
        }}>
          {categories.find(c => c.value === article.category)?.label || article.category}
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 800,
          marginBottom: '1.5rem',
          color: '#1a1a1a',
          lineHeight: 1.3
        }}>
          {article.title}
        </h1>

        {/* Content */}
        <div style={{
          fontSize: '1.1rem',
          lineHeight: 1.8,
          color: '#444',
          marginBottom: '2rem'
        }}>
          {article.excerpt && <p style={{ marginBottom: '1.5rem', fontStyle: 'italic', color: '#666' }}>{article.excerpt}</p>}
          <div style={{
            fontSize: '1.05rem',
            lineHeight: '1.8',
            color: '#333'
          }}>
            <ReactMarkdown
              components={{
                h1: ({node, ...props}) => <h1 {...props} style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '1.5rem 0 1rem', color: '#1a1a1a' }} />,
                h2: ({node, ...props}) => <h2 {...props} style={{ fontSize: '2rem', fontWeight: 'bold', margin: '1.5rem 0 1rem', color: '#1a1a1a' }} />,
                h3: ({node, ...props}) => <h3 {...props} style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '1.2rem 0 0.8rem', color: '#1a1a1a' }} />,
                p: ({node, ...props}) => <p {...props} style={{ margin: '1rem 0', lineHeight: '1.8' }} />,
                ul: ({node, ...props}) => <ul {...props} style={{ marginLeft: '2rem', margin: '1rem 0', listStyleType: 'disc' }} />,
                ol: ({node, ...props}) => <ol {...props} style={{ marginLeft: '2rem', margin: '1rem 0', listStyleType: 'decimal' }} />,
                li: ({node, ...props}) => <li {...props} style={{ margin: '0.5rem 0' }} />,
                blockquote: ({node, ...props}) => <blockquote {...props} style={{ borderLeft: '4px solid #FF6B00', paddingLeft: '1.5rem', margin: '1.5rem 0', color: '#666', fontStyle: 'italic' }} />,
                strong: ({node, ...props}) => <strong {...props} style={{ fontWeight: 'bold', color: '#1a1a1a' }} />,
                em: ({node, ...props}) => <em {...props} style={{ fontStyle: 'italic' }} />,
                code: ({node, inline, ...props}) => inline ?
                  <code {...props} style={{ backgroundColor: '#f5f5f5', padding: '0.2em 0.4em', borderRadius: '3px', fontFamily: 'monospace', color: '#d63384' }} /> :
                  <code {...props} style={{ backgroundColor: '#f5f5f5', padding: '1rem', borderRadius: '5px', display: 'block', margin: '1rem 0', overflow: 'auto', fontFamily: 'monospace' }} />,
              }}
            >
              {article.content}
            </ReactMarkdown>
          </div>
        </div>

        {/* Related Articles CTA */}
        <div style={{
          marginTop: '3rem',
          paddingTop: '2rem',
          borderTop: '1px solid #eee'
        }}>
          <button
            onClick={() => navigate('/actualites')}
            style={{
              background: 'linear-gradient(135deg, #e84c1f 0%, #ff6b35 100%)',
              color: 'white',
              border: 'none',
              padding: '0.8rem 2rem',
              borderRadius: '50px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Lire d'autres articles
          </button>
        </div>
      </article>
    </div>
  )
}

export default ArticleDetail
