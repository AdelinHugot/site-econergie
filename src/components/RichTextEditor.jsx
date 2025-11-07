import React, { useMemo } from 'react';
import { Slate, Editable, withReact } from 'slate-react';
import { createEditor } from 'slate';
import { withHistory } from 'slate-history';
import { Bold, Italic, Heading2, List, ListOrdered, Quote, RotateCcw } from 'lucide-react';

const deserializeHtml = (html) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html || '<p></p>', 'text/html');

  const deserialize = (el) => {
    if (el.nodeType === 3) {
      return el.textContent;
    }

    if (el.nodeType !== 1) return null;

    const children = Array.from(el.childNodes).map(deserialize).filter(Boolean);

    if (el.nodeName === 'BODY') {
      return children.map(child => ({ type: 'paragraph', children: Array.isArray(child) ? child : [{ text: child }] }));
    }

    if (el.nodeName === 'P') {
      return { type: 'paragraph', children };
    }
    if (el.nodeName === 'H1' || el.nodeName === 'H2' || el.nodeName === 'H3') {
      return { type: 'heading', level: parseInt(el.nodeName[1]), children };
    }
    if (el.nodeName === 'UL') {
      return children.map(child => ({ type: 'list-item', children: [child] }));
    }
    if (el.nodeName === 'OL') {
      return children.map(child => ({ type: 'list-item', ordered: true, children: [child] }));
    }
    if (el.nodeName === 'LI') {
      return { type: 'list-item', children };
    }
    if (el.nodeName === 'BLOCKQUOTE') {
      return { type: 'blockquote', children };
    }
    if (el.nodeName === 'STRONG' || el.nodeName === 'B') {
      return { text: el.textContent, bold: true };
    }
    if (el.nodeName === 'EM' || el.nodeName === 'I') {
      return { text: el.textContent, italic: true };
    }

    return { text: el.textContent };
  };

  const nodes = deserialize(doc.body);
  return nodes.length > 0 ? nodes : [{ type: 'paragraph', children: [{ text: '' }] }];
};

const serializeToHtml = (nodes) => {
  return nodes.map(node => {
    let element;

    if (node.type === 'paragraph') {
      element = `<p>${node.children.map(child => serializeText(child)).join('')}</p>`;
    } else if (node.type === 'heading') {
      const level = node.level || 1;
      element = `<h${level}>${node.children.map(child => serializeText(child)).join('')}</h${level}>`;
    } else if (node.type === 'list-item') {
      element = `<li>${node.children.map(child => serializeText(child)).join('')}</li>`;
    } else if (node.type === 'blockquote') {
      element = `<blockquote>${node.children.map(child => serializeText(child)).join('')}</blockquote>`;
    } else {
      element = node.children.map(child => serializeText(child)).join('');
    }

    return element;
  }).join('');
};

const serializeText = (node) => {
  if (typeof node === 'string') return node;

  let text = node.text || '';
  if (node.bold) text = `<strong>${text}</strong>`;
  if (node.italic) text = `<em>${text}</em>`;
  return text;
};

export default function RichTextEditor({ value, onChange }) {
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  const initialValue = useMemo(
    () => deserializeHtml(value),
    [value]
  );

  const ToolbarButton = ({ icon: Icon, onMouseDown, isActive, title }) => (
    <button
      onMouseDown={(e) => {
        e.preventDefault();
        onMouseDown();
      }}
      title={title}
      className={`p-2 rounded transition ${
        isActive
          ? 'bg-[#FF6B00] text-white'
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      <Icon className="w-4 h-4" />
    </button>
  );

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      <Slate editor={editor} initialValue={initialValue} onChange={() => onChange(serializeToHtml(editor.children))}>
        {/* Toolbar */}
        <div className="bg-gray-50 border-b border-gray-200 p-2 flex flex-wrap gap-1">
          <ToolbarButton
            icon={Bold}
            onMouseDown={() => {
              editor.toggleMark('bold');
            }}
            title="Gras"
          />
          <ToolbarButton
            icon={Italic}
            onMouseDown={() => {
              editor.toggleMark('italic');
            }}
            title="Italique"
          />
          <div className="w-px bg-gray-300 mx-1" />
          <ToolbarButton
            icon={Heading2}
            onMouseDown={() => {
              editor.toggleBlock('heading');
            }}
            title="Titre"
          />
          <ToolbarButton
            icon={List}
            onMouseDown={() => {
              editor.toggleBlock('list');
            }}
            title="Liste"
          />
          <ToolbarButton
            icon={Quote}
            onMouseDown={() => {
              editor.toggleBlock('blockquote');
            }}
            title="Citation"
          />
          <div className="w-px bg-gray-300 mx-1" />
          <ToolbarButton
            icon={RotateCcw}
            onMouseDown={() => {
              editor.deleteBackward('character');
            }}
            title="Réinitialiser"
          />
        </div>

        {/* Editor */}
        <Editable
          className="p-4 bg-white min-h-[300px] focus:outline-none"
          placeholder="Écrivez votre contenu ici..."
          style={{ lineHeight: '1.6', fontSize: '1rem' }}
        />
      </Slate>
    </div>
  );
}
