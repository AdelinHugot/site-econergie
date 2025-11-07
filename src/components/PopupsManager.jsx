import React, { useState, useEffect } from 'react';
import { supabase } from '../services/supabaseClient';
import { uploadPopupImage, getImageUrl } from '../services/storageService';
import { Plus, Edit2, Trash2, X, AlertCircle } from 'lucide-react';
import Toast from './Toast';
import ConfirmModal from './ConfirmModal';
import AdminPageHeader from './AdminPageHeader';

export default function PopupsManager() {
  const [popups, setPopups] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [toast, setToast] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState({ show: false, id: null });
  const [formData, setFormData] = useState({
    page_slug: 'home',
    title: '',
    image_storage_path: '',
    image_url: '',
    link_url: '',
    link_text: '',
    delay_ms: 0,
    active: true,
  });

  const pages = [
    { slug: 'home', name: 'Accueil' },
    { slug: 'poeles', name: 'Poêles' },
    { slug: 'cheminees', name: 'Cheminées' },
    { slug: 'services', name: 'Services' },
    { slug: 'apropos', name: 'À propos' },
    { slug: 'actualites', name: 'Actualités' },
    { slug: 'catalogues', name: 'Catalogues' },
    { slug: 'contact', name: 'Contact' },
  ];

  useEffect(() => {
    fetchPopups();
  }, []);

  const fetchPopups = async () => {
    setLoading(true);
    setError('');
    try {
      const { data, error: fetchError } = await supabase
        .from('popups')
        .select('*')
        .order('created_at', { ascending: false });

      if (fetchError) throw fetchError;
      setPopups(data || []);
    } catch (err) {
      setError('Erreur lors du chargement des pop-ups : ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const resetForm = () => {
    setFormData({
      page_slug: 'home',
      title: '',
      image_storage_path: '',
      image_url: '',
      link_url: '',
      link_text: '',
      delay_ms: 0,
      active: true,
    });
    setEditingId(null);
    setShowForm(false);
    setPreviewImage(null);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    setError('');

    try {
      // Créer une preview temporaire
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreviewImage(event.target?.result);
      };
      reader.readAsDataURL(file);

      // Upload l'image (on utilisera l'ID temporaire)
      const tempId = Date.now();
      const storagePath = await uploadPopupImage(file, tempId);

      // Obtenir l'URL publique
      const publicUrl = getImageUrl(storagePath);

      setFormData({
        ...formData,
        image_storage_path: storagePath,
        image_url: publicUrl,
      });
    } catch (err) {
      setError('Erreur lors de l\'upload : ' + err.message);
      setPreviewImage(null);
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (editingId) {
        const { error: updateError } = await supabase
          .from('popups')
          .update({ ...formData, updated_at: new Date() })
          .eq('id', editingId);

        if (updateError) throw updateError;
        setToast({
          message: 'Pop-up mis à jour avec succès',
          type: 'success'
        });
      } else {
        const { error: insertError } = await supabase
          .from('popups')
          .insert([formData]);

        if (insertError) throw insertError;
        setToast({
          message: 'Pop-up créé avec succès',
          type: 'success'
        });
      }

      resetForm();
      fetchPopups();
    } catch (err) {
      setToast({
        message: 'Erreur : ' + err.message,
        type: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (popup) => {
    setFormData(popup);
    setEditingId(popup.id);
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
        .from('popups')
        .delete()
        .eq('id', id);

      if (deleteError) throw deleteError;
      setToast({
        message: 'Pop-up supprimé avec succès',
        type: 'success'
      });
      setDeleteConfirm({ show: false, id: null });
      fetchPopups();
    } catch (err) {
      setToast({
        message: 'Erreur : ' + err.message,
        type: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const getPageName = (slug) => {
    return pages.find(p => p.slug === slug)?.name || slug;
  };

  return (
    <div>
      {/* Header */}
      <AdminPageHeader
        title="Pop-ups"
        description="Gérez les pop-ups par page"
        action={() => {
          resetForm();
          setShowForm(true);
        }}
        actionIcon={Plus}
        actionLabel="Nouveau pop-up"
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
                  {editingId ? 'Éditer le pop-up' : 'Créer un nouveau pop-up'}
                </h2>
                <button onClick={resetForm} className="text-gray-400 hover:text-gray-600">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Page Selection */}
                <div>
                  <label htmlFor="page_slug" className="block text-sm font-medium text-gray-700 mb-2">
                    Page <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="page_slug"
                    name="page_slug"
                    value={formData.page_slug}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                  >
                    {pages.map((page) => (
                      <option key={page.slug} value={page.slug}>
                        {page.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Title */}
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                    Titre
                  </label>
                  <input
                    id="title"
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Titre du pop-up"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                  />
                </div>

                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Image du Pop-up
                  </label>
                  <div className="space-y-3">
                    {previewImage && (
                      <div className="relative inline-block">
                        <img src={previewImage} alt="Aperçu" className="h-32 rounded-lg border border-gray-200" />
                        <button
                          type="button"
                          onClick={() => {
                            setPreviewImage(null);
                            setFormData({ ...formData, image_storage_path: '', image_url: '' });
                          }}
                          className="absolute top-2 right-2 p-1 bg-red-600 text-white rounded-full hover:bg-red-700"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                    <label htmlFor="image_upload" className="flex items-center justify-center w-full px-4 py-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#FF6B00] hover:bg-orange-50 transition">
                      <input
                        id="image_upload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        disabled={uploadingImage}
                        className="hidden"
                      />
                      <span className="text-sm text-gray-600">
                        {uploadingImage ? 'Upload en cours...' : 'Cliquez pour uploader une image'}
                      </span>
                    </label>
                    <p className="text-xs text-gray-500">Formats : JPEG, PNG, WebP, GIF (Max 5MB)</p>
                  </div>
                </div>

                {/* Link Settings */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="link_url" className="block text-sm font-medium text-gray-700 mb-2">
                      URL du lien
                    </label>
                    <input
                      id="link_url"
                      type="url"
                      name="link_url"
                      value={formData.link_url}
                      onChange={handleInputChange}
                      placeholder="https://..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="link_text" className="block text-sm font-medium text-gray-700 mb-2">
                      Texte du lien
                    </label>
                    <input
                      id="link_text"
                      type="text"
                      name="link_text"
                      value={formData.link_text}
                      onChange={handleInputChange}
                      placeholder="Texte du bouton"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Delay */}
                <div>
                  <label htmlFor="delay_ms" className="block text-sm font-medium text-gray-700 mb-2">
                    Délai d'affichage (en secondes)
                  </label>
                  <input
                    id="delay_ms"
                    type="number"
                    name="delay_ms"
                    value={Math.round(formData.delay_ms / 1000)}
                    onChange={(e) => setFormData({
                      ...formData,
                      delay_ms: parseInt(e.target.value) * 1000,
                    })}
                    min="0"
                    step="1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                  />
                  <p className="text-xs text-gray-500 mt-1">0 = affichage immédiat</p>
                </div>

                {/* Active Checkbox */}
                <div className="flex items-center">
                  <input
                    id="active"
                    type="checkbox"
                    name="active"
                    checked={formData.active}
                    onChange={handleInputChange}
                    className="w-4 h-4 rounded border-gray-300 text-[#FF6B00] focus:ring-[#FF6B00]"
                  />
                  <label htmlFor="active" className="ml-2 text-sm text-gray-700">
                    Actif
                  </label>
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
            title="Supprimer le pop-up"
            message="Cette action est irréversible. Le pop-up sera définitivement supprimé."
            confirmText="Supprimer"
            cancelText="Annuler"
            isDangerous={true}
            isLoading={loading}
            onConfirm={confirmDelete}
            onCancel={() => setDeleteConfirm({ show: false, id: null })}
          />
        )}

        {/* Popups List */}
        {loading && !showForm && popups.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Chargement des pop-ups...</p>
          </div>
        ) : popups.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">Aucun pop-up pour le moment</p>
            <button
              onClick={() => { resetForm(); setShowForm(true); }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FF6B00] text-white hover:bg-[#E55A00] transition"
            >
              <Plus className="w-4 h-4" />
              Créer un pop-up
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Titre</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Page</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Statut</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Date</th>
                    <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {popups.map((popup) => (
                    <tr key={popup.id} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {popup.title || 'Pop-up sans titre'}
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700 text-xs font-medium">
                          {getPageName(popup.page_slug)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          popup.active
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {popup.active ? 'Actif' : 'Inactif'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {new Date(popup.created_at).toLocaleDateString('fr-FR')}
                      </td>
                      <td className="px-6 py-4 flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleEdit(popup)}
                          className="p-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(popup.id)}
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
