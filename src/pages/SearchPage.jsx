import React, { useState } from 'react';
import { searchArtists } from '../services/spotify';
import { useAuth } from '../contexts/AuthContext';
import ArtistCard from '../components/ArtistCard';

export default function SearchPage() {
  const { token } = useAuth();
  const [query, setQuery] = useState('');
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async e => {
    e.preventDefault();
    if (!query.trim()) return;
    setError('');
    setLoading(true);
    try {
      const results = await searchArtists(query);
      setArtists(results);
    } catch (err) {
      setError('Hubo un error al buscar: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!token) {
    return (
      <div style={{ padding: '2rem' }}>
        🔒 Necesitas <a href="/login">loguearte</a> para buscar artistas.
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🔍 Búsqueda de artistas</h1>

      <form onSubmit={handleSearch} style={{ margin: '1rem 0' }}>
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Escribe el nombre de un artista..."
          style={{
            padding: '0.5rem',
            fontSize: '1rem',
            width: '300px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
        <button
          type="submit"
          style={{
            marginLeft: '0.5rem',
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          Buscar
        </button>
      </form>

      {loading && <p>Cargando resultados…</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {artists.map(artist => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
    </div>
  );
}
