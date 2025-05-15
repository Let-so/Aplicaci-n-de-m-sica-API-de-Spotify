import React from 'react';
import { Link } from 'react-router-dom';

export default function ArtistCard({ artist }) {
  const imgUrl = artist.images[0]?.url || 'https://via.placeholder.com/150';
  return (
    <Link
      to={`/artist/${artist.id}`}
      style={{
        margin: 8,
        width: 140,
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <img
          src={imgUrl}
          alt={artist.name}
          style={{ width: 140, height: 140, objectFit: 'cover', borderRadius: 8 }}
        />
        <p style={{ marginTop: 6, fontSize: 14 }}>{artist.name}</p>
      </div>
    </Link>
  );
}
