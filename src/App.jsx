import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage';
import ArtistPage from './pages/ArtistPage';
import AlbumPage from './pages/AlbumPage';

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<SearchPage />} />
      <Route path="/artist/:id" element={<ArtistPage />} />
      <Route path="/album/:id" element={<AlbumPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

