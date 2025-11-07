import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../services/supabaseClient';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    // Vérifie la session existante au chargement
    const checkUser = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (isMounted) {
          setUser(session?.user || null);
        }
      } catch (err) {
        console.error('Error checking user:', err);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    checkUser();

    // Écoute UNIQUEMENT les changements post-authentification
    // Ne rien faire au montage, juste mettre à jour quand ça change
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (isMounted) {
        setUser(session?.user || null);
      }
    });

    const subscription = data?.subscription;

    return () => {
      isMounted = false;
      subscription?.unsubscribe();
    };
  }, []);

  const signUp = async (email, password) => {
    try {
      setError(null);
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });
      if (signUpError) throw signUpError;
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const signIn = async (email, password) => {
    try {
      setError(null);
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (signInError) throw signInError;
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const signOut = async () => {
    try {
      setError(null);
      const { error: signOutError } = await supabase.auth.signOut();
      if (signOutError) throw signOutError;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const value = {
    user,
    loading,
    error,
    signUp,
    signIn,
    signOut,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
