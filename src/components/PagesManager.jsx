import React, { useState, useEffect } from 'react';
import { supabase } from '../services/supabaseClient';
import { Plus, Edit2, Trash2, X, AlertCircle } from 'lucide-react';
import Toast from './Toast';
import ConfirmModal from './ConfirmModal';
import AdminPageHeader from './AdminPageHeader';

export default function PagesManager() {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [toast, setToast] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState({ show: false, id: null });
  const [formData, setFormData] = useState({
    slug: '',
    title: '',
    content: {},
    meta_description: '',
  });

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    setLoading(true);
    setError('');
    try {
      const { data, error: fetchError } = await supabase
        .from('pages')
        .select('*')
        .order('created_at', { ascending: false });

      if (fetchError) throw fetchError;
      setPages(data || []);
    } catch (err) {
      setError('Erreur lors du chargement des pages : ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleContentChange = (e) => {
    const { value } = e.target;
    try {
      const parsedContent = JSON.parse(value);
      setFormData({
        ...formData,
        content: parsedContent,
      });
    } catch {
      // Si ce n'est pas du JSON valide, on le stocke quand même
      setFormData({
        ...formData,
        content: { text: value },
      });
    }
  };

  const resetForm = () => {
    setFormData({
      slug: '',
      title: '',
      content: {},
      meta_description: '',
    });
    setEditingId(null);
    setShowForm(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (!formData.slug.trim()) {
        throw new Error('Le slug est obligatoire');
      }

      if (editingId) {
        const { error: updateError } = await supabase
          .from('pages')
          .update({ ...formData, updated_at: new Date() })
          .eq('id', editingId);

        if (updateError) throw updateError;
        setToast({
          message: 'Page mise à jour avec succès',
          type: 'success'
        });
      } else {
        const { error: insertError } = await supabase
          .from('pages')
          .insert([formData]);

        if (insertError) throw insertError;
        setToast({
          message: 'Page créée avec succès',
          type: 'success'
        });
      }

      resetForm();
      fetchPages();
    } catch (err) {
      setToast({
        message: 'Erreur : ' + err.message,
        type: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (page) => {
    setFormData(page);
    setEditingId(page.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setDeleteConfirm({ show: true, id });
  };

  const confirmDelete = async () => {
    const id = deleteConfirm.id;
    setLoading(true);
    setError('');

    try {
      const { error: deleteError } = await supabase
        .from('pages')
        .delete()
        .eq('id', id);

      if (deleteError) throw deleteError;
      setToast({
        message: 'Page supprimée avec succès',
        type: 'success'
      });
      setDeleteConfirm({ show: false, id: null });
      fetchPages();
    } catch (err) {
      setToast({
        message: 'Erreur : ' + err.message,
        type: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Header */}
      <AdminPageHeader
        title="Pages"
        description="Éditer le contenu des pages"
        action={() => {
          resetForm();
          setShowForm(true);
        }}
        actionIcon={Plus}
        actionLabel="Nouvelle page"
      />

      <div className="p-8">
        {/* Error alert */}
        {error && (
          <div className="mb-6 flex items-center gap-3 p-4 rounded-lg bg-red-50 border border-red-200">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
            <p className="text-sm text-red-800">{error}</p>
          </div>
        )}

        {/* Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 flex items-center justify-between p-6 border-b border-gray-100 bg-white">
                <h2 className="text-xl font-bold text-gray-900">
                  {editingId ? 'Éditer la page' : 'Créer une nouvelle page'}
                </h2>
                <button onClick={resetForm} className="text-gray-400 hover:text-gray-600">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Slug */}
                <div>
                  <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-2">
                    Slug <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="slug"
                    type="text"
                    name="slug"
                    value={formData.slug}
                    onChange={handleInputChange}
                    placeholder="nom-de-la-page"
                    required
                    disabled={editingId ? true : false}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent disabled:bg-gray-100"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Ex: home, apropos, contact (ne peut pas être changé après création)
                  </p>
                </div>

                {/* Title */}
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                    Titre <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="title"
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Titre de la page"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                  />
                </div>

                {/* Meta Description */}
                <div>
                  <label htmlFor="meta_description" className="block text-sm font-medium text-gray-700 mb-2">
                    Description Meta (SEO)
                  </label>
                  <textarea
                    id="meta_description"
                    name="meta_description"
                    value={formData.meta_description}
                    onChange={handleInputChange}
                    placeholder="Description pour les moteurs de recherche (160 caractères max)"
                    rows="3"
                    maxLength="160"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                  />
                </div>

                {/* Content */}
                <div>
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                    Contenu (JSON) <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    value={JSON.stringify(formData.content, null, 2)}
                    onChange={handleContentChange}
                    placeholder='{"titre": "Mon contenu", "paragraphes": ["Contenu..."]}'
                    rows="10"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent font-mono text-sm"
                  />
                  <p className="text-xs text-gray-500 mt-1">Entrez du JSON valide ou du texte simple</p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 justify-end pt-4 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={resetForm}
                    disabled={loading}
                    className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition disabled:opacity-50"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-4 py-2 rounded-lg bg-[#FF6B00] text-white hover:bg-[#E55A00] transition disabled:opacity-50 font-medium"
                  >
                    {loading ? 'Sauvegarde...' : editingId ? 'Mettre à jour' : 'Créer'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Delete Confirmation */}
        {deleteConfirm.show && (
          <ConfirmModal
            title="Supprimer la page"
            message="Cette action est irréversible. La page sera définitivement supprimée."
            confirmText="Supprimer"
            cancelText="Annuler"
            isDangerous={true}
            isLoading={loading}
            onConfirm={confirmDelete}
            onCancel={() => setDeleteConfirm({ show: false, id: null })}
          />
        )}

        {/* Pages List */}
        {loading && !showForm && pages.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Chargement des pages...</p>
          </div>
        ) : pages.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">Aucune page pour le moment</p>
            <button
              onClick={() => { resetForm(); setShowForm(true); }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FF6B00] text-white hover:bg-[#E55A00] transition"
            >
              <Plus className="w-4 h-4" />
              Créer une page
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Titre</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Slug</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Description</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Date</th>
                    <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {pages.map((page) => (
                    <tr key={page.id} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {page.title}
                      </td>
                      <td className="px-6 py-4">
                        <code className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-mono">
                          {page.slug}
                        </code>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 truncate max-w-xs">
                        {page.meta_description || '-'}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {new Date(page.created_at).toLocaleDateString('fr-FR')}
                      </td>
                      <td className="px-6 py-4 flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleEdit(page)}
                          className="p-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(page.id)}
                          className="p-2 rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-600 transition"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Toast */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
