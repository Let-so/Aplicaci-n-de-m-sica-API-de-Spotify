// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const { login } = useAuth();
  const [id, setId] = useState('');
  const [secret, setSecret] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setError(null);
    try {
      await login(id, secret);
      navigate('/');
    } catch {
      setError('No se pudo autenticar. Revisa tus credenciales.');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Conéctate a Spotify</h2>
      <form onSubmit={handleSubmit}>
        <label>Client ID</label><br/>
        <input value={id} onChange={e => setId(e.target.value)} required /><br/><br/>
        <label>Client Secret</label><br/>
        <input type="password" value={secret} onChange={e => setSecret(e.target.value)} required /><br/><br/>
        <button type="submit">Obtener Token</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
