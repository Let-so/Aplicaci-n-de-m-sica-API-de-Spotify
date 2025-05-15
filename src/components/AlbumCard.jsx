// src/components/AlbumCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function AlbumCard({ album }) {
  const imgUrl = album.images[0]?.url || 'https://via.placeholder.com/140';
  // Extraemos el año de la fecha de lanzamiento
  const year = album.release_date?.split('-')[0];
  return (
    <Link
      to={`/album/${album.id}`}
      style={{ margin: 8, width: 140, textDecoration: 'none', color: 'inherit' }}
    >
      <div style={{ textAlign: 'center' }}>
        <img
          src={imgUrl}
          alt={album.name}
          style={{ width: 140, height: 140, objectFit: 'cover', borderRadius: 8 }}
        />
        <p style={{ margin: '6px 0 0', fontSize: 14 }}>{album.name}</p>
        {year && <span style={{ fontSize: 12, color: '#666' }}>{year}</span>}
      </div>
    </Link>
  );
}
