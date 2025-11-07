import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import ArticlesManager from './ArticlesManager';
import PopupsManager from './PopupsManager';

export default function AdminLayout({ user, onLogout }) {
  const [activeTab, setActiveTab] = useState('articles');

  return (
    <div className="h-screen bg-[#F8F9FC]">
      {/* Sidebar */}
      <AdminSidebar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        user={user}
        onLogout={onLogout}
      />

      {/* Main Content */}
      <div className="ml-64 h-full overflow-y-auto">
        {activeTab === 'articles' && <ArticlesManager />}
        {activeTab === 'popups' && <PopupsManager />}
      </div>
    </div>
  );
}
