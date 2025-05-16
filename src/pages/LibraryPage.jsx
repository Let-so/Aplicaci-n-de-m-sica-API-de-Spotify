import React from 'react';
import '../styles/HomePage.css';

function LibraryPage() {
  return (
    <div className="library-page">
      <h1>Tu Biblioteca</h1>
      <div className="library-content">
        <div className="library-section">
          <h2>Playlists</h2>
          <div className="playlist-grid">
            {/* Aquí irán las playlists del usuario */}
            <div className="empty-message">
              No tienes playlists guardadas aún.
            </div>
          </div>
        </div>
        
        <div className="library-section">
          <h2>Artistas guardados</h2>
          <div className="artists-grid">
            {/* Aquí irán los artistas guardados */}
            <div className="empty-message">
              No tienes artistas guardados aún.
            </div>
          </div>
        </div>
        
        <div className="library-section">
          <h2>Álbumes guardados</h2>
          <div className="albums-grid">
            {/* Aquí irán los álbumes guardados */}
            <div className="empty-message">
              No tienes álbumes guardados aún.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LibraryPage;