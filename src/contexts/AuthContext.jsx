// src/contexts/AuthContext.jsx
import React, { createContext, useContext, useState } from 'react';
import { fetchToken, getToken } from '../services/spotifyAuth';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);

  const login = async (id, secret) => {
    localStorage.setItem('spClientId', id);
    localStorage.setItem('spClientSecret', secret);
    const t = await fetchToken(id, secret);
    setToken(t);
  };

  const safeGetToken = () => {
    try {
      return getToken();
    } catch {
      return null;
    }
  };

  return (
    <AuthContext.Provider value={{ token, login, getToken: safeGetToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
