// src/contexts/FavoritesContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  // Levantamos de localStorage o iniciamos vacío
  const [favoriteArtists, setFavoriteArtists] = useState(() => {
    return JSON.parse(localStorage.getItem('favArtists') || '[]');
  });
  const [favoriteTracks, setFavoriteTracks] = useState(() => {
    return JSON.parse(localStorage.getItem('favTracks') || '[]');
  });

  // Persistir cambios en localStorage
  useEffect(() => {
    localStorage.setItem('favArtists', JSON.stringify(favoriteArtists));
  }, [favoriteArtists]);
  useEffect(() => {
    localStorage.setItem('favTracks', JSON.stringify(favoriteTracks));
  }, [favoriteTracks]);

  const toggleArtist = id => {
    setFavoriteArtists(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };
  const toggleTrack = id => {
    setFavoriteTracks(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  return (
    <FavoritesContext.Provider
      value={{ favoriteArtists, favoriteTracks, toggleArtist, toggleTrack }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoritesContext);
