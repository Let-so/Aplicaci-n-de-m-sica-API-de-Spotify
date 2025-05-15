// src/components/TrackList.jsx
import React from 'react';

export default function TrackList({ tracks }) {
  return (
    <ol style={{ paddingLeft: '1.5rem' }}>
      {tracks.map(track => (
        <li key={track.id} style={{ margin: '0.5rem 0' }}>
          {track.track_number}. {track.name}
        </li>
      ))}
    </ol>
  );
}
