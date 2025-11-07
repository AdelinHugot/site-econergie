import React from 'react';
import {
  Newspaper,
  MessageSquare,
  LogOut,
  Settings
} from 'lucide-react';

export default function AdminSidebar({ activeTab, onTabChange, user, onLogout }) {

  const menuItems = [
    {
      id: 'articles',
      label: 'Articles',
      icon: Newspaper,
      description: 'Gérer les articles'
    },
    {
      id: 'popups',
      label: 'Pop-ups',
      icon: MessageSquare,
      description: 'Gérer les pop-ups'
    }
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#1E1E1E] text-white border-r border-gray-800 flex flex-col z-40">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b border-gray-800">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF6B00] to-[#E55A00] flex items-center justify-center flex-shrink-0">
          <Settings className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="font-bold text-lg text-white">Econergie</h1>
          <p className="text-xs text-gray-400">Admin</p>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-2 py-4 overflow-y-auto flex flex-col gap-2 justify-start w-full">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`
                w-full flex items-center gap-3 px-3 py-2.5 rounded-lg
                transition-all duration-200
                relative group
                ${isActive
                  ? 'bg-[#FF6B00] text-white shadow-lg shadow-[#FF6B00]/20'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }
              `}
            >
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-white rounded-r-full" />
              )}
              <Icon className="w-5 h-5 flex-shrink-0" />
              <div className="flex-1 text-left">
                <p className="text-sm font-medium">{item.label}</p>
                <p className="text-xs text-white">{item.description}</p>
              </div>
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-800 space-y-3">
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-gray-800/50">
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0 text-sm font-bold">
            {user?.email?.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-400">Connecté</p>
            <p className="text-xs font-medium text-gray-200 truncate">
              {user?.email}
            </p>
          </div>
        </div>
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-red-900/20 hover:text-red-400 transition-all duration-200"
        >
          <LogOut className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm font-medium">Déconnexion</span>
        </button>
      </div>
    </aside>
  );
}
