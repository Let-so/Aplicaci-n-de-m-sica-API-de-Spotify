import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        borderBottom: '1px solid #ddd',
        marginBottom: '1rem',
      }}
    >
      <NavLink to="/" style={{ textDecoration: 'none', fontWeight: 'bold', fontSize: '1.2rem' }}>
        🎧 Spotify TP3
      </NavLink>

      <nav style={{ display: 'flex', gap: '1rem' }}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? '#000' : '#666',
          })}
        >
          Buscar
        </NavLink>
        <NavLink
          to="/favorites"
          style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? '#000' : '#666',
          })}
        >
          Favoritos
        </NavLink>
        <NavLink
          to="/login"
          style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? '#000' : '#666',
          })}
        >
          Login
        </NavLink>
      </nav>
    </header>
  );
}
