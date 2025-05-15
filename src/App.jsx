import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage';
import ArtistPage from './pages/ArtistPage';
import AlbumPage from './pages/AlbumPage';
import FavoritesPage from './pages/FavoritesPage';
import Header from './components/Header';

export default function App() {
  return (
     <>
    <Header />
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<SearchPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/artist/:id" element={<ArtistPage />} />
      <Route path="/album/:id" element={<AlbumPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </>
  );
}

