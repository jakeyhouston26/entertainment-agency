import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EntertainersPage from './pages/EntertainersPage';
import EntertainerDetailsPage from './pages/EntertainerDetailsPage';
import AddEntertainerPage from './pages/AddEntertainerPage';
import EditEntertainerPage from './pages/EditEntertainerPage';

export default function App() {
  return (
    <>
      <nav className="navbar navbar-expand fixed-top navbar-dark bg-dark px-3">
        <a className="navbar-brand" href="#">🎤 Entertainment Agency</a>
        <div className="navbar-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/entertainers" className="nav-link">Entertainers</Link>
        </div>
      </nav>

      <div style={{ marginTop: '56px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/entertainers" element={<EntertainersPage />} />
          <Route path="/entertainers/new" element={<AddEntertainerPage />} />
          <Route path="/entertainers/:id" element={<EntertainerDetailsPage />} />
          <Route path="/entertainers/:id/edit" element={<EditEntertainerPage />} />
        </Routes>
      </div>
    </>
  );
}
