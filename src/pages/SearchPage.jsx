import React, { useState } from 'react';
import { searchArtists } from '../services/spotify';
import { useAuth } from '../contexts/AuthContext';
import ArtistCard from '../components/ArtistCard';
import '../styles/SearchPage.css';
import { Link } from 'react-router-dom';

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
      <div className="search-page">
        <p>🔒 Necesitas <Link to= "/login" >loguearte</Link> para buscar artistas.</p>
      </div>
    );
  }

  return (
    <div className="search-page">
      <h1>Explorar todo</h1>

      <form onSubmit={handleSearch}>
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Artistas, canciones o podcasts"
        />
        <button type="submit">
          Buscar
        </button>
      </form>

      {loading && <p>Cargando resultados…</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!query && (
        <div>
          <h2>Explorar todo</h2>
          <div className="category-grid">
            <div className="category-card" style={{ backgroundColor: '#1E8954' }}>
              <div className="category-title">Podcasts</div>
            </div>
            <div className="category-card" style={{ backgroundColor: '#477D95' }}>
              <div className="category-title">Especialmente para ti</div>
            </div>
            <div className="category-card" style={{ backgroundColor: '#8D67AB' }}>
              <div className="category-title">Listas de éxitos</div>
            </div>
            <div className="category-card" style={{ backgroundColor: '#E8115B' }}>
              <div className="category-title">Novedades</div>
            </div>
            <div className="category-card" style={{ backgroundColor: '#7358FF' }}>
              <div className="category-title">Descubrir</div>
            </div>
            <div className="category-card" style={{ backgroundColor: '#E13300' }}>
              <div className="category-title">Latina</div>
            </div>
            <div className="category-card" style={{ backgroundColor: '#8C1932' }}>
              <div className="category-title">Estado de ánimo</div>
            </div>
            <div className="category-card" style={{ backgroundColor: '#B49BC8' }}>
              <div className="category-title">Pop</div>
            </div>
            <div className="category-card" style={{ backgroundColor: '#E91429' }}>
              <div className="category-title">Flamenco</div>
            </div>
            <div className="category-card" style={{ backgroundColor: '#0D72ED' }}>
              <div className="category-title">Relax</div>
            </div>
          </div>
        </div>
      )}

      {artists.length > 0 && (
        <div>
          <h2>Resultados para "{query}"</h2>
          <div className="artist-grid">
            {artists.map(artist => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
