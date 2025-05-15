// src/pages/AlbumPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getAlbum } from '../services/spotify';
import { useAuth } from '../contexts/AuthContext';
import TrackList from '../components/TrackList';

export default function AlbumPage() {
  const { id } = useParams();
  const { token } = useAuth();
  const [album, setAlbum] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!token) return;
    setLoading(true);
    setError('');
    getAlbum(id)
      .then(data => {
        setAlbum(data);
      })
      .catch(err => {
        setError('Error al cargar el álbum: ' + err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id, token]);

  if (!token) {
    return (
      <p style={{ padding: '2rem' }}>
        🔒 Debes <Link to="/login">loguearte</Link>.
      </p>
    );
  }
  if (loading) {
    return <p style={{ padding: '2rem' }}>Cargando álbum…</p>;
  }
  if (error) {
    return <p style={{ padding: '2rem', color: 'red' }}>{error}</p>;
  }

  // Datos del álbum
  const { name, images, artists, tracks } = album;
  const imgUrl = images[0]?.url || 'https://via.placeholder.com/240';
  const artist = artists[0]; // suele venir como array con un único artista

  return (
    <div style={{ padding: '2rem' }}>
      <Link to={`/artist/${artist.id}`} style={{ textDecoration: 'none', color: '#555' }}>
        ← Volver al artista
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', margin: '1rem 0' }}>
        <img
          src={imgUrl}
          alt={name}
          style={{
            width: 160,
            height: 160,
            objectFit: 'cover',
            borderRadius: 8,
            marginRight: '1rem',
          }}
        />
        <div>
          <h2 style={{ margin: 0 }}>{name}</h2>
          <p style={{ margin: '0.5rem 0', color: '#666' }}>
            Por {artist.name}
          </p>
        </div>
      </div>

      <h3>Listado de pistas</h3>
      <TrackList tracks={tracks.items} />
    </div>
  );
}
