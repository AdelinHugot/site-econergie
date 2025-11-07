import { supabase } from './supabaseClient';

const POPUP_BUCKET = 'popup-images';
const ARTICLE_BUCKET = 'article-images';

/**
 * Initialise les buckets de stockage s'ils n'existent pas
 */
export const initializeBucket = async () => {
  try {
    // Vérifier si les buckets existent
    const { data: buckets } = await supabase.storage.listBuckets();
    const popupBucketExists = buckets?.some(b => b.name === POPUP_BUCKET);
    const articleBucketExists = buckets?.some(b => b.name === ARTICLE_BUCKET);

    if (!popupBucketExists) {
      // Créer le bucket popup-images s'il n'existe pas
      await supabase.storage.createBucket(POPUP_BUCKET, {
        public: true,
        allowedMimeTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
        fileSizeLimit: 5242880, // 5MB
      });
      console.log('Bucket popup-images créé avec succès');
    }

    if (!articleBucketExists) {
      // Créer le bucket article-images s'il n'existe pas
      await supabase.storage.createBucket(ARTICLE_BUCKET, {
        public: true,
        allowedMimeTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
        fileSizeLimit: 5242880, // 5MB
      });
      console.log('Bucket article-images créé avec succès');
    }
  } catch (error) {
    console.error('Erreur lors de l\'initialisation des buckets:', error);
  }
};

/**
 * Upload une image pour un pop-up
 * @param {File} file - Le fichier image
 * @param {number} popupId - L'ID du pop-up
 * @returns {Promise<string>} - Le chemin de stockage de l'image
 */
export const uploadPopupImage = async (file, popupId) => {
  try {
    if (!file) {
      throw new Error('Aucun fichier sélectionné');
    }

    // Vérifier le type de fichier
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      throw new Error('Format d\'image non autorisé. Utilisez JPEG, PNG, WebP ou GIF');
    }

    // Créer un nom de fichier unique
    const timestamp = Date.now();
    const fileName = `popup-${popupId}-${timestamp}-${Math.random().toString(36).substr(2, 9)}`;
    const extension = file.name.split('.').pop();
    const fullPath = `${popupId}/${fileName}.${extension}`;

    // Upload le fichier
    const { data, error } = await supabase.storage
      .from(POPUP_BUCKET)
      .upload(fullPath, file, {
        cacheControl: '3600',
        upsert: false,
      });

    if (error) throw error;

    return fullPath;
  } catch (error) {
    console.error('Erreur lors de l\'upload:', error);
    throw error;
  }
};

/**
 * Upload une image pour un article
 * @param {File} file - Le fichier image
 * @param {number} articleId - L'ID de l'article
 * @returns {Promise<string>} - Le chemin de stockage de l'image
 */
export const uploadArticleImage = async (file, articleId) => {
  try {
    if (!file) {
      throw new Error('Aucun fichier sélectionné');
    }

    // Vérifier le type de fichier
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      throw new Error('Format d\'image non autorisé. Utilisez JPEG, PNG, WebP ou GIF');
    }

    // Créer un nom de fichier unique
    const timestamp = Date.now();
    const fileName = `article-${articleId}-${timestamp}-${Math.random().toString(36).substr(2, 9)}`;
    const extension = file.name.split('.').pop();
    const fullPath = `${articleId}/${fileName}.${extension}`;

    // Upload le fichier
    const { data, error } = await supabase.storage
      .from(ARTICLE_BUCKET)
      .upload(fullPath, file, {
        cacheControl: '3600',
        upsert: false,
      });

    if (error) throw error;

    return fullPath;
  } catch (error) {
    console.error('Erreur lors de l\'upload:', error);
    throw error;
  }
};

/**
 * Obtient l'URL publique d'une image stockée dans le bucket popup-images
 * @param {string} storagePath - Le chemin de stockage
 * @returns {string} - L'URL publique de l'image
 */
export const getImageUrl = (storagePath) => {
  if (!storagePath) return null;

  const { data } = supabase.storage.from(POPUP_BUCKET).getPublicUrl(storagePath);
  return data?.publicUrl;
};

/**
 * Obtient l'URL publique d'une image stockée dans le bucket article-images
 * @param {string} storagePath - Le chemin de stockage
 * @returns {string} - L'URL publique de l'image
 */
export const getArticleImageUrl = (storagePath) => {
  if (!storagePath) return null;

  const { data } = supabase.storage.from(ARTICLE_BUCKET).getPublicUrl(storagePath);
  return data?.publicUrl;
};

/**
 * Supprime une image du bucket popup-images
 * @param {string} storagePath - Le chemin de stockage
 */
export const deleteImage = async (storagePath) => {
  try {
    if (!storagePath) return;

    const { error } = await supabase.storage
      .from(POPUP_BUCKET)
      .remove([storagePath]);

    if (error) throw error;
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'image:', error);
    throw error;
  }
};

/**
 * Supprime une image du bucket article-images
 * @param {string} storagePath - Le chemin de stockage
 */
export const deleteArticleImage = async (storagePath) => {
  try {
    if (!storagePath) return;

    const { error } = await supabase.storage
      .from(ARTICLE_BUCKET)
      .remove([storagePath]);

    if (error) throw error;
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'image:', error);
    throw error;
  }
};
