import React, { useState, useEffect } from 'react';
import { supabase } from '../services/supabaseClient';
import { uploadArticleImage, getArticleImageUrl } from '../services/storageService';
import { Plus, Edit2, Trash2, X, AlertCircle, Newspaper, Upload, Check, Copy } from 'lucide-react';
import Toast from './Toast';
import ConfirmModal from './ConfirmModal';
import AdminPageHeader from './AdminPageHeader';
import MarkdownEditor from './MarkdownEditor';

export default function ArticlesManager() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [toast, setToast] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState({ show: false, id: null });
  const [uploadingImage, setUploadingImage] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: 'produit',
    image_storage_path: '',
    image_url: '',
    published: true,
  });

  // Charger les articles
  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    setLoading(true);
    setError('');
    try {
      const { data, error: fetchError } = await supabase
        .from('articles')
        .select('*')
        .order('created_at', { ascending: false });

      if (fetchError) throw fetchError;
      setArticles(data || []);
    } catch (err) {
      setError('Erreur lors du chargement des articles : ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newFormData = {
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    };

    // Auto-generate slug from title if title changed
    if (name === 'title' && !editingId) {
      newFormData.slug = generateSlug(value);
    }

    setFormData(newFormData);
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
      const storagePath = await uploadArticleImage(file, tempId);

      // Obtenir l'URL publique
      const publicUrl = getArticleImageUrl(storagePath);

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

  const resetForm = () => {
    setFormData({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      category: 'produit',
      image_storage_path: '',
      image_url: '',
      published: true,
    });
    setEditingId(null);
    setShowForm(false);
    setPreviewImage(null);
  };

  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (editingId) {
        // Mise à jour
        const { error: updateError } = await supabase
          .from('articles')
          .update({ ...formData, updated_at: new Date() })
          .eq('id', editingId);

        if (updateError) throw updateError;
        setToast({
          message: 'Article mis à jour avec succès',
          type: 'success'
        });
      } else {
        // Création
        const { error: insertError } = await supabase
          .from('articles')
          .insert([formData]);

        if (insertError) throw insertError;
        setToast({
          message: 'Article créé avec succès',
          type: 'success'
        });
      }

      resetForm();
      fetchArticles();
    } catch (err) {
      setToast({
        message: 'Erreur : ' + err.message,
        type: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (article) => {
    setFormData(article);
    setEditingId(article.id);
    setShowForm(true);
    // Set preview image if article has an image
    if (article.image_url) {
      setPreviewImage(article.image_url);
    }
  };

  const handleDelete = (id) => {
    setDeleteConfirm({ show: true, id });
  };

  const handleCopyLink = (articleSlug) => {
    const articleUrl = `${window.location.origin}/actualites/${articleSlug}`;
    navigator.clipboard.writeText(articleUrl);
    setToast({
      message: 'Lien copié dans le presse-papiers',
      type: 'success'
    });
  };

  const confirmDelete = async () => {
    const id = deleteConfirm.id;
    setLoading(true);
    setError('');

    try {
      const { error: deleteError } = await supabase
        .from('articles')
        .delete()
        .eq('id', id);

      if (deleteError) throw deleteError;
      setToast({
        message: 'Article supprimé avec succès',
        type: 'success'
      });
      setDeleteConfirm({ show: false, id: null });
      fetchArticles();
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
      {/* Header with action button */}
      <AdminPageHeader
        title="Articles"
        description="Gérez vos articles et actualités"
        action={() => {
          resetForm();
          setShowForm(true);
        }}
        actionIcon={Plus}
        actionLabel="Nouvel article"
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
              {/* Modal Header */}
              <div className="sticky top-0 flex items-center justify-between p-6 border-b border-gray-100 bg-white rounded-t-lg">
                <h2 className="text-xl font-bold text-gray-900">
                  {editingId ? 'Éditer l\'article' : 'Créer un nouvel article'}
                </h2>
                <button
                  onClick={resetForm}
                  className="p-1.5 text-gray-400 hover:text-gray-600 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
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
                    placeholder="Titre de l'article"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                  />
                </div>

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
                    placeholder="exemple-article"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                  />
                  <p className="text-xs text-gray-500 mt-1">Généré automatiquement à partir du titre, peut être modifié</p>
                </div>

                {/* Excerpt */}
                <div>
                  <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
                    Résumé
                  </label>
                  <textarea
                    id="excerpt"
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleInputChange}
                    placeholder="Résumé ou chapeau de l'article"
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                  />
                </div>

                {/* Content */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contenu <span className="text-red-600">*</span>
                  </label>
                  <MarkdownEditor
                    value={formData.content}
                    onChange={(content) => setFormData({ ...formData, content })}
                  />
                </div>

                {/* Category */}
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    Catégorie
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                  >
                    <option value="produit">Produit</option>
                    <option value="promotion">Promotion</option>
                    <option value="conseil">Conseil</option>
                    <option value="environnement">Environnement</option>
                    <option value="client">Client</option>
                    <option value="event">Événement</option>
                  </select>
                </div>

                {/* Hero Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Image Hero
                  </label>
                  <div className="space-y-3">
                    {/* Upload Area */}
                    <div className="relative">
                      <input
                        type="file"
                        accept="image/jpeg,image/png,image/webp,image/gif"
                        onChange={handleImageUpload}
                        disabled={uploadingImage}
                        className="absolute inset-0 opacity-0 w-full h-full cursor-pointer disabled:cursor-not-allowed"
                      />
                      <div className={`
                        border-2 border-dashed rounded-lg p-6 text-center transition
                        ${uploadingImage
                          ? 'bg-blue-50 border-blue-300'
                          : previewImage
                          ? 'border-green-300 bg-green-50'
                          : 'border-gray-300 hover:border-gray-400'
                        }
                      `}>
                        {uploadingImage ? (
                          <div className="text-blue-600">
                            <p className="font-medium">Upload en cours...</p>
                          </div>
                        ) : previewImage ? (
                          <div className="flex items-center justify-center gap-2 text-green-600">
                            <Check className="w-5 h-5" />
                            <p className="font-medium">Image uploadée avec succès</p>
                          </div>
                        ) : (
                          <div className="text-gray-600">
                            <Upload className="w-6 h-6 mx-auto mb-2" />
                            <p className="font-medium">Déposez votre image ici</p>
                            <p className="text-sm text-gray-500">ou cliquez pour parcourir</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Preview */}
                    {previewImage && (
                      <div className="relative rounded-lg overflow-hidden border border-gray-200">
                        <img
                          src={previewImage}
                          alt="Preview"
                          className="w-full h-48 object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setPreviewImage(null);
                            setFormData({
                              ...formData,
                              image_storage_path: '',
                              image_url: ''
                            });
                          }}
                          className="absolute top-2 right-2 p-1.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Published checkbox */}
                <div className="flex items-center">
                  <input
                    id="published"
                    type="checkbox"
                    name="published"
                    checked={formData.published}
                    onChange={handleInputChange}
                    className="w-4 h-4 rounded border-gray-300 text-[#FF6B00] focus:ring-[#FF6B00]"
                  />
                  <label htmlFor="published" className="ml-2 text-sm text-gray-700">
                    Publié
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

        {/* Delete Confirmation Modal */}
        {deleteConfirm.show && (
          <ConfirmModal
            title="Supprimer l'article"
            message="Cette action est irréversible. L'article sera définitivement supprimé."
            confirmText="Supprimer"
            cancelText="Annuler"
            isDangerous={true}
            isLoading={loading}
            onConfirm={confirmDelete}
            onCancel={() => setDeleteConfirm({ show: false, id: null })}
          />
        )}

        {/* Articles List */}
        {loading && !showForm && articles.length === 0 ? (
          <div className="text-center py-12">
            <div className="inline-block p-3 rounded-lg bg-gray-100 mb-4">
              <Newspaper className="w-6 h-6 text-gray-600" />
            </div>
            <p className="text-gray-600">Chargement des articles...</p>
          </div>
        ) : articles.length === 0 ? (
          <div className="text-center py-12">
            <div className="inline-block p-3 rounded-lg bg-gray-100 mb-4">
              <Newspaper className="w-6 h-6 text-gray-600" />
            </div>
            <p className="text-gray-600 mb-4">Aucun article pour le moment</p>
            <button
              onClick={() => {
                resetForm();
                setShowForm(true);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FF6B00] text-white hover:bg-[#E55A00] transition font-medium"
            >
              <Plus className="w-4 h-4" />
              Créer un article
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
            {/* Table Header */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Titre
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Catégorie
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Statut
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Date
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {articles.map((article) => (
                    <tr
                      key={article.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {article.title}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
                          {article.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`
                          inline-block px-2.5 py-0.5 rounded-full text-xs font-medium
                          ${article.published
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-700'
                          }
                        `}>
                          {article.published ? 'Publié' : 'Brouillon'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {new Date(article.created_at).toLocaleDateString('fr-FR')}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleCopyLink(article.slug)}
                            className="p-2 rounded-lg text-gray-600 hover:bg-green-50 hover:text-green-600 transition"
                            title="Copier le lien"
                          >
                            <Copy className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleEdit(article)}
                            className="p-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition"
                            title="Éditer"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(article.id)}
                            className="p-2 rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-600 transition"
                            title="Supprimer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile View - Card Layout */}
            <div className="md:hidden divide-y divide-gray-200">
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="mb-3">
                    <h3 className="font-medium text-gray-900 mb-1">
                      {article.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
                        {article.category}
                      </span>
                      <span className={`
                        inline-block px-2.5 py-0.5 rounded-full text-xs font-medium
                        ${article.published
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-700'
                        }
                      `}>
                        {article.published ? 'Publié' : 'Brouillon'}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">
                      {new Date(article.created_at).toLocaleDateString('fr-FR')}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopyLink(article.slug)}
                      className="flex-1 px-3 py-2 rounded-lg text-sm font-medium text-green-600 border border-green-300 hover:bg-green-50 transition"
                    >
                      Copier
                    </button>
                    <button
                      onClick={() => handleEdit(article)}
                      className="flex-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 border border-gray-300 hover:bg-gray-50 transition"
                    >
                      Éditer
                    </button>
                    <button
                      onClick={() => handleDelete(article.id)}
                      className="flex-1 px-3 py-2 rounded-lg text-sm font-medium text-red-600 border border-red-300 hover:bg-red-50 transition"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Toast Notification */}
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
