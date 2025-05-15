// src/services/spotify.js
import { getToken } from './spotifyAuth';

const API_BASE = 'https://api.spotify.com/v1';

/**
 * Busca artistas por nombre.
 */
export async function searchArtists(query) {
  const token = getToken();
  const res = await fetch(
    `${API_BASE}/search?q=${encodeURIComponent(query)}&type=artist&limit=20`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  if (!res.ok) throw new Error('Error en searchArtists');
  const data = await res.json();
  return data.artists.items;
}

/**
 * Obtiene álbumes de un artista
 */
export async function getArtistAlbums(artistId) {
  const token = getToken();
  const res = await fetch(
    `${API_BASE}/artists/${artistId}/albums?include_groups=album,single&limit=50`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  if (!res.ok) throw new Error('Error en getArtistAlbums');
  const data = await res.json();
  return data.items;
}

/**
 * Obtiene los datos básicos de un artista por su ID.
 */
export async function getArtist(artistId) {
  const token = getToken();
  const res = await fetch(`${API_BASE}/artists/${artistId}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) throw new Error('Error en getArtist');
  return await res.json(); // { id, name, images, ... }
}


/**
 * Obtiene detalle de un álbum (con tracks)
 */
export async function getAlbum(albumId) {
  const token = getToken();
  const res = await fetch(`${API_BASE}/albums/${albumId}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) throw new Error('Error en getAlbum');
  return await res.json();
}
