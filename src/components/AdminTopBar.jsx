import React from 'react';
import '../styles/AdminTopBar.css';

export default function AdminTopBar({ activeTab, onTabChange, user, onLogout }) {
  return (
    <div className="admin-topbar">
      <div className="topbar-left">
        <div className="topbar-logo">
          <span className="logo-icon">⚙️</span>
          <h1>Econergie Admin</h1>
        </div>

        <nav className="topbar-nav">
          <button
            className={`topbar-nav-item ${activeTab === 'articles' ? 'active' : ''}`}
            onClick={() => onTabChange('articles')}
          >
            <span className="topbar-nav-icon">📰</span>
            <span className="topbar-nav-text">Articles</span>
          </button>
          <button
            className={`topbar-nav-item ${activeTab === 'popups' ? 'active' : ''}`}
            onClick={() => onTabChange('popups')}
          >
            <span className="topbar-nav-icon">🎯</span>
            <span className="topbar-nav-text">Pop-ups</span>
          </button>
          <button
            className={`topbar-nav-item ${activeTab === 'pages' ? 'active' : ''}`}
            onClick={() => onTabChange('pages')}
          >
            <span className="topbar-nav-icon">📄</span>
            <span className="topbar-nav-text">Pages</span>
          </button>
        </nav>
      </div>

      <div className="topbar-right">
        <div className="topbar-user-info">
          <div className="topbar-avatar">👤</div>
          <span className="topbar-email">{user?.email}</span>
        </div>
        <button className="topbar-logout" onClick={onLogout}>
          Déconnexion
        </button>
      </div>
    </div>
  );
}
