// src/services/spotifyAuth.js
const TOKEN_URL = 'https://accounts.spotify.com/api/token';
let _token = null;
let _tokenExpiry = 0;

export async function fetchToken(clientId, clientSecret) {
  const body = new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: clientId,
    client_secret: clientSecret
  });

  const res = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error('Error al autenticar: ' + (err.error_description || res.status));
  }

  const { access_token, expires_in } = await res.json();
  _token = access_token;
  _tokenExpiry = Date.now() + expires_in * 1000;
  return access_token;
}

export function getToken() {
  if (!_token || Date.now() >= _tokenExpiry) {
    throw new Error('Token expirado o no obtenido');
  }
  return _token;
}
