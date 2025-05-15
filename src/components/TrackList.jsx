import React from 'react';
import { useFavorites } from '../contexts/FavoritesContext';

export default function TrackList({ tracks }) {
  const { favoriteTracks, toggleTrack } = useFavorites();

  return (
    <ol style={{ paddingLeft: '1.5rem' }}>
      {tracks.map(track => {
        const isFav = favoriteTracks.includes(track.id);
        return (
          <li
            key={track.id}
            style={{ margin: '0.5rem 0', display: 'flex', alignItems: 'center' }}
          >
            <button
              onClick={() => toggleTrack(track.id)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: 16,
                marginRight: 8,
              }}
            >
              {isFav ? '★' : '☆'}
            </button>
            {track.track_number}. {track.name}
          </li>
        );
      })}
    </ol>
  );
}
