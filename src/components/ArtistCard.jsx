import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../contexts/FavoritesContext';

export default function ArtistCard({ artist }) {
  const imgUrl = artist.images[0]?.url || 'https://via.placeholder.com/140';
  const { favoriteArtists, toggleArtist } = useFavorites();
  const isFav = favoriteArtists.includes(artist.id);

  return (
    <div style={{ position: 'relative', margin: 8, width: 140, textAlign: 'center' }}>
      <button
        onClick={() => toggleArtist(artist.id)}
        style={{
          position: 'absolute',
          top: 4,
          right: 4,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: 18,
        }}
      >
        {isFav ? '★' : '☆'}
      </button>

      <Link to={`/artist/${artist.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img
          src={imgUrl}
          alt={artist.name}
          style={{ width: 140, height: 140, objectFit: 'cover', borderRadius: 8 }}
        />
        <p style={{ marginTop: 6, fontSize: 14 }}>{artist.name}</p>
      </Link>
    </div>
  );
}
