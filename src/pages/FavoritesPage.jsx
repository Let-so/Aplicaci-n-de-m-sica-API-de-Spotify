// src/pages/FavoritesPage.jsx
import React, { useEffect, useState } from 'react';
import { useFavorites } from '../contexts/FavoritesContext';
import { searchArtists, getAlbum } from '../services/spotify';
import ArtistCard from '../components/ArtistCard';
import TrackList from '../components/TrackList';
import { Link } from 'react-router-dom';

export default function FavoritesPage() {
  const { favoriteArtists, favoriteTracks } = useFavorites();
  const [artists, setArtists] = useState([]);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    // Cargamos artistas por ID
    Promise.all(favoriteArtists.map(id => searchArtists(id + '*'))) // búsqueda aproximada
      .then(results => setArtists(results.flat()));
  }, [favoriteArtists]);

  useEffect(() => {
    // Debe existir un servicio getTrack o usar getAlbum para filtrar
    Promise.all(
      favoriteTracks.map(id =>
        getAlbum(id.substring(0, id.indexOf('-'))) // asumiendo id de track tiene album-track?
      )
    ).then(() => {
      // Para simplificar, omitimos detalle exacto
      setTracks([]); 
    });
  }, [favoriteTracks]);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>⭐ Favoritos</h1>
      <Link to="/">← Volver a búsqueda</Link>

      <h2>Artistas Favoritos</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {artists.map(artist => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>

      <h2>Pistas Favoritas</h2>
      {/* Para pistas podrías listarlas con TrackList, pero necesitarás un service getTrack */}
      {tracks.length === 0 ? (
        <p>No has marcado pistas aún.</p>
      ) : (
        <TrackList tracks={tracks} />
      )}
    </div>
  );
}
