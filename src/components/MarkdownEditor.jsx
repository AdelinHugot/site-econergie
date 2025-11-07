import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Bold, Italic, Heading2, List, ListOrdered, Quote } from 'lucide-react';

export default function MarkdownEditor({ value, onChange }) {
  const [isPreview, setIsPreview] = useState(false);

  const insertMarkdown = (before, after = '') => {
    const textarea = document.getElementById('markdown-textarea');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const selectedText = text.substring(start, end) || 'texte';

    const newText = text.substring(0, start) + before + selectedText + after + text.substring(end);
    onChange(newText);

    setTimeout(() => {
      textarea.focus();
      textarea.selectionStart = start + before.length;
      textarea.selectionEnd = start + before.length + selectedText.length;
    }, 0);
  };

  const ToolbarButton = ({ icon: Icon, onClick, title }) => (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className="p-2 rounded text-gray-600 hover:bg-gray-100 transition"
    >
      <Icon className="w-4 h-4" />
    </button>
  );

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      {/* Toolbar */}
      <div className="bg-gray-50 border-b border-gray-200 p-2 flex flex-wrap gap-1 items-center">
        <ToolbarButton
          icon={Bold}
          onClick={() => insertMarkdown('**', '**')}
          title="Gras"
        />
        <ToolbarButton
          icon={Italic}
          onClick={() => insertMarkdown('*', '*')}
          title="Italique"
        />
        <div className="w-px bg-gray-300 h-6 mx-1" />
        <ToolbarButton
          icon={Heading2}
          onClick={() => insertMarkdown('## ', '')}
          title="Titre 2"
        />
        <ToolbarButton
          icon={List}
          onClick={() => insertMarkdown('- ', '')}
          title="Liste"
        />
        <ToolbarButton
          icon={ListOrdered}
          onClick={() => insertMarkdown('1. ', '')}
          title="Liste numérotée"
        />
        <ToolbarButton
          icon={Quote}
          onClick={() => insertMarkdown('> ', '')}
          title="Citation"
        />
        <div className="flex-1" />

        {/* Preview Toggle */}
        <button
          type="button"
          onClick={() => setIsPreview(!isPreview)}
          className={`px-3 py-1 rounded text-sm font-medium transition ${
            isPreview
              ? 'bg-[#FF6B00] text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {isPreview ? 'Éditer' : 'Aperçu'}
        </button>
      </div>

      {/* Editor/Preview */}
      <div className="bg-white min-h-[400px]">
        {isPreview ? (
          <div className="p-4 prose prose-sm max-w-none">
            <ReactMarkdown>{value}</ReactMarkdown>
          </div>
        ) : (
          <textarea
            id="markdown-textarea"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Écrivez votre contenu ici...&#10;&#10;Utilisez:&#10;**texte** pour gras&#10;*texte* pour italique&#10;## Titre pour un titre&#10;- Point pour une liste&#10;> Citation"
            className="w-full h-[400px] p-4 border-0 focus:outline-none resize-none font-mono text-sm"
          />
        )}
      </div>

      {/* Helper Text */}
      {!isPreview && (
        <div className="bg-gray-50 border-t border-gray-200 p-3 text-xs text-gray-600">
          <p className="font-bold mb-2">Astuces de formatage:</p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div><strong>**texte**</strong> = <strong>gras</strong></div>
            <div><strong>*texte*</strong> = <em>italique</em></div>
            <div><strong>## Titre</strong> = Titre (laisser une ligne vide avant)</div>
            <div><strong>- Point</strong> = Liste (une ligne vide avant)</div>
            <div><strong>1. Point</strong> = Liste numérotée</div>
            <div><strong>&gt; Citation</strong> = Citation (ligne vide avant)</div>
          </div>
          <p className="mt-2 text-gray-500">💡 N'oublie pas de laisser une ligne vide entre les paragraphes!</p>
        </div>
      )}
    </div>
  );
}
