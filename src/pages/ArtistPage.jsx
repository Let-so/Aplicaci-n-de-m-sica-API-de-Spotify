// src/pages/ArtistPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArtist, getArtistAlbums } from '../services/spotify';
import { useAuth } from '../contexts/AuthContext';
import AlbumCard from '../components/AlbumCard';

export default function ArtistPage() {
  const { id } = useParams();
  const { token } = useAuth();
  const [artist, setArtist] = useState(null);
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!token) return;
    setLoading(true);
    setError('');
    // Cargamos artista y álbumes en paralelo
    Promise.all([getArtist(id), getArtistAlbums(id)])
      .then(([artistData, albumsData]) => {
        setArtist(artistData);
        setAlbums(albumsData);
      })
      .catch(err => setError('Error al cargar datos: ' + err.message))
      .finally(() => setLoading(false));
  }, [id, token]);

  if (!token) {
    return <p style={{ padding: '2rem' }}>🔒 Debes <Link to="/login">loguearte</Link>.</p>;
  }
  if (loading) {
    return <p style={{ padding: '2rem' }}>Cargando artista…</p>;
  }
  if (error) {
    return <p style={{ padding: '2rem', color: 'red' }}>{error}</p>;
  }

  const imgUrl = artist.images[0]?.url || 'https://via.placeholder.com/240';

  return (
    <div style={{ padding: '2rem' }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#555' }}>← Volver</Link>
      <div style={{ display: 'flex', alignItems: 'center', margin: '1rem 0' }}>
        <img
          src={imgUrl}
          alt={artist.name}
          style={{ width: 160, height: 160, objectFit: 'cover', borderRadius: 8, marginRight: '1rem' }}
        />
        <h2 style={{ margin: 0 }}>{artist.name}</h2>
      </div>

      <h3>Álbumes</h3>
      {albums.length === 0 ? (
        <p>No se encontraron álbumes.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {albums.map(album => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      )}
    </div>
  );
}
